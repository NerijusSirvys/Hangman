using Api.Models;
using API.Models;
using API.Services;
using System.Collections.Generic;
using System.Linq;
using API.Extensions;

namespace Api.Responses
{
    public class LevelResponse
    {
        public string Id { get; set; }
        public string Secret { get; set; }
        public string Clue { get; set; }
        public string Difficulty { get; set; }
        public int StarReward { get; set; }
        public int GameScoreReward { get; set; }
        public IEnumerable<HintResponse> Hints { get; set; }

        public LevelResponse Map(AsignedLevel model)
        {
            var hintResponseCollection = new List<HintResponse>();

            foreach (var item in model.OwnedHints)
            {
                hintResponseCollection.Add(new HintResponse().Map(item, model.Level.Difficulty));
            }

            return new LevelResponse
            {
                Id = model.Id.ToString(),
                Clue = model.Level.Clue,
                Secret = model.Level.Secret,
                StarReward = StarService.Reward(model.Level.Difficulty),
                GameScoreReward = GameScoreService.Reward(model.Level.Difficulty),
                Hints = hintResponseCollection,
                Difficulty = model.Level.Difficulty.SplitCamelCase()
            };
        }
    }
}