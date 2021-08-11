using API.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Models
{
    public class Level
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [Column(TypeName = "varchar(30)")]
        public string Secret { get; set; }

        [Required]
        [Column(TypeName = "varchar(max)")]
        public string Clue { get; set; }

        [Required]
        [Column(TypeName = "varchar(30)")]
        public string Difficulty { get; set; }

        public ICollection<Hint> Hints { get; set; }

        public ICollection<AsignedLevel> AsignedLevels { get; set; }
    }
}