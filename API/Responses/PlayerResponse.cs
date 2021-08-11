using Api.Models;
using API.Enums;
using System.Linq;

namespace Api.Responses
{
    public class PlayerResponse
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public int GameScore { get; set; }
        public int Stars { get; set; }
        public int CompleteLevels { get; set; }

        public PlayerResponse Map(Player player)
        {
            return new PlayerResponse
            {
                Id = player.Id,
                GameScore = player.Score,
                Stars = player.Stars,
                UserName = player.UserName,
                CompleteLevels = (player.Levels?.Count(x=>x.LevelStatus == nameof(Status.Complete))) ?? 0
            };
        }
    }
}