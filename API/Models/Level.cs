using Api.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Level
    {
        public Guid Id { get; set; }
        public string Secret { get; set; }
        public string Clue { get; set; }
        public IEnumerable<Hint> Hints { get; set; }
        public string Difficulty { get; set; }
    }
}
