using Api.Models;
using API.Models;
using API.Services;

namespace Api.Responses
{
    public class HintResponse
    {
        public string Id { get; set; }
        public string Clue { get; set; }
        public bool Show { get; set; }
        public int Price { get; set; }

        public HintResponse Map(OwnedHint model, string levelDifficulty)
        {
            return new HintResponse()
            {
                Id = model.HintId.ToString(),
                Clue = model.Hint.Clue,
                Price = StarService.Cost(levelDifficulty),
                Show = model.Show
            };
        }
    }
}