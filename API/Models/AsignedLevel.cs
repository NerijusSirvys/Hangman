using Api.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class AsignedLevel
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public string LevelStatus { get; set; }

        [Required]
        public Guid LevelId { get; set; }


        [Required]
        public string PlayerId { get; set; }

        public Player Player { get; set; }

        public Level Level { get; set; }

        public ICollection<OwnedHint> OwnedHints { get; set; }

    }
}