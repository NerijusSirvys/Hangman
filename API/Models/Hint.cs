using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Hint
    {
        public Guid Id { get; set; }
        public string Clue { get; set; }
        public bool Show { get; set; }
        public int Price { get; set; }
    }
}
