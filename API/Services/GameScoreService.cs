using Api.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public static class GameScoreService
    {
        public static int Reward(string levelDifficulty)
        {
            Enum.TryParse(levelDifficulty, out LevelDifficulty reward);

            return (int)reward * 25;
        }
    }
}
