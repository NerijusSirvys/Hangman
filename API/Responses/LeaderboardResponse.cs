using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Responses
{
    public class LeaderboardResponse
    {
        public string Id { get; set; }
        public string Username { get; set; }
        public int GameScore { get; set; }

        public IEnumerable<LeaderboardResponse> Map(IEnumerable<Player> players)
        {
            var output = new List<LeaderboardResponse>();

            foreach (var item in players)
            {
                output.Add(new LeaderboardResponse { Id = item.Id, Username = item.UserName, GameScore = item.Score });
            }

            return output;
        }
    }
}
