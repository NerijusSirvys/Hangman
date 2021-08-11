using Api.Enums;
using System;

namespace API.Services
{
    public static class GameScoreService
    {
        private const int BASE = 25;

        /// <summary>
        /// Calculate game score reward based on level difficulty
        /// </summary>
        public static int Reward(string levelDifficulty)
        {
            Enum.TryParse(levelDifficulty, out LevelDifficulty reward);

            return (int)reward * BASE;
        }
    }
}