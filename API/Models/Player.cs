using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Player
    {
        public Guid Id { get; set; }
        public string UserName { get; set; }
        public int Score { get; set; }
        public int Stars { get; set; }
        public IEnumerable<Guid> CompleteLevels { get; set; }
    }
}
