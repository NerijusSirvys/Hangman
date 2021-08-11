using Api.Models;
using API.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;

namespace API.DBContext
{
    public class HangmanDbContext : IdentityDbContext<Player>
    {

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Player>().ToTable("Player");
        }

        public HangmanDbContext(DbContextOptions<HangmanDbContext> opt) : base(opt)
        {
        }

        public DbSet<Player> Players { get; set; }
        public DbSet<AsignedLevel> AssignedLevels { get; set; }
        public DbSet<Level> Levels { get; set; }
        public DbSet<Hint> Hints { get; set; }
        public DbSet<OwnedHint> OwnedHints { get; set; }



    }
}