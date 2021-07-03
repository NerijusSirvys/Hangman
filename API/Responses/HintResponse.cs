using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Responses
{
    public class HintResponse : IResponse<HintResponse, Hint>
    {
        public string Id { get; set; }
        public string Clue { get; set; }
        public bool Show { get; set; }
        public int Price { get; set; }

        public HintResponse Map(Hint model)
        {
            return new HintResponse
            {
                Id = model.Id.ToString(),
                Clue = model.Clue,
                Price = model.Price,
                Show = model.Show
            };
        }
    }
}
