using Api.Enums;
using System;

namespace API.Services
{
    public static class StarService
    {
        private const int InitialMultiplier = 2;
        private static int _multiplier = InitialMultiplier;

        public static int Reward(string levelDifficulty)
        {
            Enum.TryParse(levelDifficulty, out LevelDifficulty reward);

            return (int)reward;
        }

        public static int Cost(string levelDifficulty)
        {
            if (_multiplier > 4)
            {
                _multiplier = InitialMultiplier;
            }

            Enum.TryParse(levelDifficulty, out LevelDifficulty price);

            var cost = (int)price * _multiplier;

            _multiplier++;

            return cost;
        }
    }
}