﻿using Api.Models;
using Api.Responses;
using API.Repositories;
using API.Requests;
using API.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [Authorize]
    [Route("[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        private readonly IRepository _repository;

        public GameController(IRepository repository)
        {
            _repository = repository;
        }

        [HttpPost("showHint")]
        public async Task<IActionResult> ShowHint( [FromBody] ShowHintRequest request)
        {
            var playerId = GetUserId();
            await _repository.ShowNewHint(request.HintId, playerId);

            return NoContent();
        }

        [HttpPost("removeStars")]
        public async Task<IActionResult> RemoveStars([FromBody] StarDeductionRequest request)
        {
            var userID = GetUserId();

            await _repository.RemoveStarsAsync(userID, request.Deduction);

            return NoContent();
        }

        [HttpGet("level")]
        public async Task<IActionResult> GetLevel()
        {
            var userId = GetUserId();

            var level = await _repository.GetLevelAsync(userId);

            if(level is null)
            {
                return NotFound();
            }

            return Ok(new LevelResponse().Map(level));

        }

        [HttpPost("prosesscompleteLevel")]
        public async Task<IActionResult> ProcessCompleteLevel(CompleteLevelRequest request)
        {
            var playerId = GetUserId();

            await _repository.ProcessCompleteLevel(playerId, request.Stars, request.GameScore);


            return NoContent();
        }

        [HttpGet("restart")]
        public async Task<IActionResult> Reset()
        {
            var userId = GetUserId();
            await _repository.ResetLevel(userId);

            var level = await _repository.GetLevelAsync(userId);

            if (level is null)
            {
                return NotFound();
            }

            return Ok(new LevelResponse().Map(level));

        }

        [HttpGet("leaderboard")]
        public async Task<IActionResult> Leaderboard()
        {
            List<Player> players = await _repository.GetLeaderboard();

            return Ok(new LeaderboardResponse().Map(players));
        }


        private string GetUserId()
        {
            return User.FindFirstValue(ClaimTypes.NameIdentifier);

        }
    }
}