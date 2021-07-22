using Api.Models;
using API.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DBContext
{
    public class HangmanDbContext : IdentityDbContext<Player>
    {
        public HangmanDbContext(DbContextOptions<HangmanDbContext> opt) : base(opt)
        {

        }

        public DbSet<Player> Players { get; set; }
        public DbSet<CompleteLevel> CompleteLevels { get; set; }
        public DbSet<Level> Levels { get; set; }
        public DbSet<Hint> Hints { get; set; }
    }
}
