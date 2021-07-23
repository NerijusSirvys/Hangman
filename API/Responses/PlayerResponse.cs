using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Responses
{
    public class PlayerResponse : IResponse<PlayerResponse, Player>
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public int GameScore { get; set; }
        public int Stars { get; set; }
        public int NumberOfCompleteLevels { get; set; }

        public PlayerResponse Map(Player player)
        {
            return new PlayerResponse
            {
                Id = player.Id,
                GameScore = player.Score,
                Stars = player.Stars,
                UserName = player.UserName,
                NumberOfCompleteLevels = player.CompleteLevels is null ? 0 : player.CompleteLevels.Count()
            };
        }

  
    }

 
}
