using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Repositories
{
    public interface IRepository
    {
        public Player GetPlayer();
        public Task<Level> GetLevelAsync(IEnumerable<string> completeLevels);
    }
}
