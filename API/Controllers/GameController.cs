using Api.Models;
using Api.Responses;
using API.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

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
        public IActionResult GetNewLevel()
        {
            var level = _repository.GetLevel();

            return Ok(new LevelResponse().Map(level));
        }
    }
}
