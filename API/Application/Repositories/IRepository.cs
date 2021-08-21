using Api.Models;
using API.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Repositories
{
    public interface IRepository
    {

        public Task<AsignedLevel> GetLevelAsync(string playerId);
        Task<Player> GetPlayerByIdAsync(string playerId);
        Task RemoveStarsAsync(string playerId, int deduction);
        Task ShowNewHint(string hintId, string playerId);
        Task ProcessCompleteLevel(string playerId, int stars, int gameScore);
        Task ResetLevel(string playerId);
    }
}