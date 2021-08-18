namespace API.Repositories
{
    using Api.Enums;
    using Api.Models;
    using API.DBContext;
    using API.Enums;
    using API.Models;
    using Microsoft.EntityFrameworkCore;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public class GameRepository : IRepository
    {
        private readonly HangmanDbContext _context;

        public GameRepository(HangmanDbContext context)

        {
            _context = context;
        }

        /// <summary>
        /// Selects and returns game level that player have not completed yet
        /// </summary>
        public async Task<AsignedLevel> GetLevelAsync(string playerId)
        {
            // get currently started level
            var currentLevel = await GetCurrentLevel(playerId);

            if (currentLevel is not null)
            {
                return currentLevel;
            }

            // if player have no started levels, get him a new one
            var newLevel = await GetRandomLevel(playerId);

            if (newLevel is null)
            {
                return null;
            }

            var nextLevel = new AsignedLevel
            {
                LevelId = newLevel.Id,
                PlayerId = playerId,
                LevelStatus = nameof(Status.Current),
                OwnedHints = GetOwnedHints(newLevel),
                Level = newLevel
            };

            await _context.AssignedLevels.AddAsync(nextLevel);
            await _context.SaveChangesAsync();

            return nextLevel;
        }

        /// <summary>
        /// Return player using id including complete levels
        /// </summary>
        public async Task<Player> GetPlayerByIdAsync(string playerId)
        {
            return await _context.Players.Include(x => x.Levels).FirstOrDefaultAsync(x => x.Id == playerId);
        }

        /// <summary>
        /// Adds game score reward, star reward and updates complete level collection
        /// </summary>
        public async Task ProcessCompleteLevel(string playerId, int stars, int gameScore)
        {
            var currentLevel = await _context.AssignedLevels.SingleOrDefaultAsync
                    (x => x.PlayerId == playerId && x.LevelStatus == nameof(Status.Current));

            currentLevel.LevelStatus = nameof(Status.Complete);

            var player = await _context.Players.FirstOrDefaultAsync(x => x.Id == playerId);

            player.Score += gameScore;
            player.Stars = stars;

            await _context.SaveChangesAsync();


        }

        /// <summary>
        /// Deduct stars from the player
        /// </summary>
        public async Task RemoveStarsAsync(string playerId, int deduction)
        {
            var player = _context.Players.FirstOrDefaultAsync(x => x.Id == playerId).Result;

            // check if player have enough stars to loose.
            // if not, set it to 0
            if (player.Stars < deduction)
            {
                player.Stars = 0;
            }
            else
            {
                player.Stars -= deduction;
            }

            await _context.SaveChangesAsync();
        }

        /// <summary>
        /// finds hint that player wiches to see and sets its show property to true
        /// </summary>
        public async Task ShowNewHint(string hintId, string playerId)
        {
            var currrentLevel = await _context.AssignedLevels
            .Include(x => x.OwnedHints).ThenInclude(x => x.Hint)
            .SingleOrDefaultAsync(x => x.PlayerId == playerId && x.LevelStatus == nameof(Status.Current));

            var hint = currrentLevel.OwnedHints.SingleOrDefault(x => x.HintId.ToString() == hintId);
            hint.Show = true;

            await _context.SaveChangesAsync();
        }

        /// <summary>
        /// Create a colleciton of hints that player owns
        /// </summary>
        private static List<OwnedHint> GetOwnedHints(Level newLevel)
        {
            // create new owned hint collection
            var ownedHints = new List<OwnedHint>();

            foreach (var item in newLevel.Hints)
            {
                ownedHints.Add(new OwnedHint { Hint = item, Show = false, HintId = item.Id });
            }

            return ownedHints;
        }

        /// <summary>
        /// Filter all levels that is not complete and select based on lowest difficulty possible
        /// </summary>
        private static List<Level> SelectLevelsByDifficulty(List<Level> levelsToDo)
        {
            var output = new List<Level>();

            // look for the same difficulty levels and store them
            foreach (var item in Enum.GetValues(typeof(LevelDifficulty)))
            {
                output = levelsToDo
                    .Where(x => x.Difficulty == ((LevelDifficulty)item)
                    .ToString()).ToList();

                if (output.Count > 0)
                {
                    break;
                }
            }

            return output;
        }

        /// <summary>
        /// Get current level that player was playing
        /// </summary>
        private async Task<AsignedLevel> GetCurrentLevel(string playerId)
        {

            var currentLevel = await _context.AssignedLevels.Include(x => x.Level)
                .Include(x => x.OwnedHints).ThenInclude(x => x.Hint)
                .SingleOrDefaultAsync(x => x.PlayerId == playerId && x.LevelStatus == nameof(Status.Current));


            if (currentLevel is null)
            {
                return null;
            }

            return currentLevel;
        }

        private async Task<Level> GetRandomLevel(string playerId)
        {
            // get list of id's of all levels that playe completed
            var completeLevelsIds = await _context.AssignedLevels
                .Where(x => x.PlayerId == playerId)
                .Select(x => x.LevelId)
                .ToListAsync();

            // get all levels that not been completed
            var allLevelsToDo = await _context.Levels
                .Include(x => x.Hints)
                .Where(x => !completeLevelsIds.Contains(x.Id))
                .ToListAsync();

            var levelsToDo = SelectLevelsByDifficulty(allLevelsToDo);

            if (levelsToDo.Count == 0) return null;

            var rnd = new Random();

            // get random index of levels
            var index = rnd.Next(0, levelsToDo.Count - 1);

            return levelsToDo[index];
        }
    }
}