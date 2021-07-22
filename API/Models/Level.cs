using Api.Enums;
using API.Services;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Level
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public string Secret { get; set; }

        [Required]
        public string Clue { get; set; }

        [Required]
        public IEnumerable<Hint> Hints { get; set; }

        [Required]
        public string Difficulty { get; set; }
    }
}
