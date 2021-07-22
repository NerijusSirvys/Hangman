using Api.Enums;
using Api.Models;
using API.Models;
using API.Seeder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Repositories
{
    public class MockGameRepo
    {
        public IEnumerable<Level> Levels { get; set; }
        private Seed _seed;

        public MockGameRepo()
        {
            _seed = new Seed();
            Levels = PopulateLevels();
        }

        public Level GetLevelAsync(IEnumerable<Guid> completeLevelIds)
        {
            var levels = Levels.ToList();

            var random = new Random();

            var index = random.Next(0, levels.Count - 1);

            return levels[index];
        }

        public Player GetPlayer()
        {
            var player = new Player
            {
                Id = Guid.NewGuid().ToString(),
                UserName = "DemoGuy",
                CompleteLevels = new List<CompleteLevel>(),
                Score = 125,
                Stars = 30
            };

            return player;
        }

        private IEnumerable<Level> PopulateLevels()
        {
            var levels = new List<Level>();

            levels.AddRange(_seed.VeryEasyLevels);
            levels.AddRange(_seed.EasyLevels);
            levels.AddRange(_seed.MediumLevels);
            levels.AddRange(_seed.HardLevels);

            return levels;

        }
    }
}
