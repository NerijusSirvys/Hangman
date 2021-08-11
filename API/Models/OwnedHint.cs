using Api.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class OwnedHint
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public Guid HintId { get; set; }

        [Required]
        public bool Show { get; set; }

        public Hint Hint { get; set; }

        public ICollection<AsignedLevel> AssignedLevels { get; set; }
    }
}
