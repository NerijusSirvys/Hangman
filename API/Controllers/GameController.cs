using Api.Responses;
using API.Repositories;
using API.Requests;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        private readonly IRepository _repository;

        public GameController(IRepository repository)
        {
            _repository = repository;
        }

        [HttpPost("CompleteLevel")]
        public async Task<IActionResult> CompleteLevel([FromBody] CompleteLevelRequest request)
        {
            var userId = GetUserId();

            await _repository.AddCompleteLevelAsync(userId);

            return Ok();
        }

        [HttpPost("addGameScore")]
        public async Task<IActionResult> AddGameScore([FromBody] RewardRequest request)
        {
            var userId = GetUserId();

            await _repository.AddGameScoreToThePlayerAsync(userId, request.Reward);

            return Ok();
        }

        [HttpPost("addStars")]
        public async Task<IActionResult> AddStars([FromBody] RewardRequest request)
        {
            var userID = GetUserId();

            await _repository.AddStarsToThePlayerAsync(userID, request.Reward);

            return Ok();
        }

        [HttpPost("removeStars")]
        public async Task<IActionResult> RemoveStars([FromBody] StarDeductionRequest request)
        {
            var userID = GetUserId();

            await _repository.RemoveStarsAsync(userID, request.Deduction);

            return Ok();
        }

        [HttpGet("level")]
        public async Task<IActionResult> GetLevel()
        {
            var userId = GetUserId();

            var level = await _repository.GetLevelAsync(userId);

            return Ok(new LevelResponse().Map(level));
        }
        private string GetUserId()
        {
            return User.FindFirstValue(ClaimTypes.NameIdentifier);

        }
    }
}