using Api.Enums;
using Api.Models;
using System;
using System.Collections.Generic;
using System.IO;

namespace API.Seeder
{
    public class Seed
    {
        public IEnumerable<Level> VeryEasyLevels { get { return GetLevels(Paths.VeryEasy, nameof(LevelDifficulty.VeryEasy)); } }
        public IEnumerable<Level> EasyLevels { get { return GetLevels(Paths.Easy, nameof(LevelDifficulty.Easy)); } }
        public IEnumerable<Level> MediumLevels { get { return GetLevels(Paths.Medium, nameof(LevelDifficulty.Medium)); } }
        public IEnumerable<Level> HardLevels { get { return GetLevels(Paths.Hasrd, nameof(LevelDifficulty.Hard)); } }

        private IEnumerable<Level> GetLevels(string path, string difficulty)
        {
            var lines = File.ReadLines(path);

            var output = new List<Level>();

            foreach (var line in lines)
            {
                var levelSections = line.Split(',');

                output.Add(new Level
                {
                    Secret = levelSections[0],
                    Clue = levelSections[1],
                    Id = Guid.NewGuid(),
                    Difficulty = difficulty,
                    Hints = new List<Hint>
                    {
                        new Hint{Id = Guid.NewGuid(),Clue = levelSections[2]},
                        new Hint{Id = Guid.NewGuid(),Clue = levelSections[3]},
                        new Hint{Id = Guid.NewGuid(),Clue = levelSections[4]}
                    }
                });
            }

            return output;
        }
    }
}
