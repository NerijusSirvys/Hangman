using API.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Api.Models
{
    public class Player : IdentityUser
    {
        [Required]
        public int Score { get; set; }

        [Required]
        public int Stars { get; set; }
        public IEnumerable<CompleteLevel> CompleteLevels { get; set; }
    }
}
