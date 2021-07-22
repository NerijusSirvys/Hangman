using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class CompleteLevel
    {
        [Key]
        public Guid Id { get; set; }
        public string PlayerId { get; set; }
        public string LevelId { get; set; }
    }
}
