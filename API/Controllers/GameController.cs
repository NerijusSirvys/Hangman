﻿using Api.Models;
using Api.Responses;
using API.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        private readonly IRepository _repository;

        public GameController(IRepository repository)
        {
            _repository = repository;
        }

        [HttpGet("player")]
        public IActionResult GetPlayer()
        {
            var player = _repository.GetPlayer();

            return Ok(new PlayerResponse().Map(player));
        }

        [HttpGet("newlevel")]
        public async Task<IActionResult> GetNewLevelAsync()
        {
            var player = _repository.GetPlayer();

            var completeLevelIds = player.CompleteLevels.Select(x => x.LevelId);
            var level = await _repository.GetLevelAsync(completeLevelIds);

            return Ok(new LevelResponse().Map(level));
        }
    }
}
