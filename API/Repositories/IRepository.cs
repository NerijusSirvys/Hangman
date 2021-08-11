using Api.Models;
using API.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Repositories
{
    public interface IRepository
    {

        public Task<AsignedLevel> GetLevelAsync(string playerID);
        Task AddStarsToThePlayerAsync(string userId, int stars);
        Task AddGameScoreToThePlayerAsync(string userId, int gameScoreReward);
        Task AddCompleteLevelAsync(string userId);
        Task<Player> GetPlayerByIdAsync(string playerId);
        Task RemoveStarsAsync(string userId, int deduction);
    }
}