using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Requests
{
    public class CompleteLevelRequest
    {
        public string LevelId { get; set; }
        public int Stars { get; set; }
        public int GameScore { get; set; }
    }
}
