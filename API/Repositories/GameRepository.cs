using Api.Enums;
using Api.Models;
using API.DBContext;
using API.Models;
using API.Seeder;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Repositories
{
    public class GameRepository : IRepository
    {
        private HangmanDbContext _context;

        public GameRepository(HangmanDbContext context)
        {
            _context = context;


        }
        public async Task<Level> GetLevelAsync(IEnumerable<string> completeLevelIds)
        {
            // all levels that not been completed
            var levelsToDo = await _context.Levels.Include(x=>x.Hints).Where(x => !completeLevelIds.Contains(x.Id.ToString())).ToListAsync();

            // look for the same difficulty levels and store them
            var output = new List<Level>();
            foreach (var item in Enum.GetValues(typeof(LevelDifficulty)))
            {
                output = levelsToDo.Where(x => x.Difficulty == ((LevelDifficulty)item).ToString()).ToList();
                if (output.Count > 0) break;
            }

            if (output.Count == 0) return null;

            // get random index of levels
            var rnd = new Random();

            var index = rnd.Next(0, output.Count - 1);

            var level = output[index];

            return level;
            //return output[index];
        }



        public Player GetPlayer()
        {
            var player = new Player
            {
                Id = Guid.NewGuid().ToString(),
                UserName = "DemoGuy",
                CompleteLevels = new List<CompleteLevel>(),
                Score = 125,
                Stars = 30
            };

            return player;
        }
    }
}
