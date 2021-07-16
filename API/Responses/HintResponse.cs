using Api.Enums;
using Api.Models;
using API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Responses
{
    public class HintResponse
    {
        public string Id { get; set; }
        public string Clue { get; set; }
        public bool Show { get; set; }
        public int Price { get; set; }

        public HintResponse Map(Hint model, string levelDifficulty)
        {
            return new HintResponse()
            {
                Id = model.Id.ToString(),
                Clue = model.Clue,
                Price = StarService.Cost(levelDifficulty),
                Show = model.Show,
                
            };
        }
    }
}
