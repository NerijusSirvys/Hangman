using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Responses
{
    public class LevelResponse : IResponse<LevelResponse, Level>
    {
        public string Id { get; set; }
        public string Secret { get; set; }
        public string Clue { get; set; }
        public IEnumerable<HintResponse> Hints { get; set; }

        public LevelResponse Map(Level model)
        {
            var hintResponses = model.Hints.Select(x => new HintResponse().Map(x));

            return new LevelResponse
            {
                Id = model.Id.ToString(),
                Clue = model.Clue,
                Secret = model.Secret,
                Hints = hintResponses
            };
        }
    }
}
