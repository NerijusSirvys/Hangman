using Api.Models;
using API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Responses
{
    public class LevelResponse
    {
        public string Id { get; set; }
        public string Secret { get; set; }
        public string Clue { get; set; }
        public string Difficulty { get; set; }
        public int StarAwardForLetter { get; set; }
        public IEnumerable<HintResponse> Hints { get; set; }

        public LevelResponse Map(Level model)
        {
            var hintResponses = model.Hints.Select(x => new HintResponse().Map(x, model.Difficulty));

            return new LevelResponse
            {
                Id = model.Id.ToString(),
                Clue = model.Clue,
                Secret = model.Secret,
                StarAwardForLetter = StarService.Reward(model.Difficulty),
                Hints = hintResponses,
                Difficulty = model.Difficulty,
            };
        }
    }
}
