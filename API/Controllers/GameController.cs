using Api.Models;
using Api.Responses;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        [HttpGet("player")]
        public IActionResult GetPlayer()
        {
            var player = new Player
            {
                Id = Guid.NewGuid(),
                UserName = "DemoGuy",
                CompleteLevels = new List<Guid>(),
                Score = 125,
                Stars = 30
            };

            return Ok(new PlayerResponse().Map(player));
        }

        [HttpGet("newlevel")]
        public IActionResult GetNewLevel()
        {
            var hints = new List<Hint>()
            {
                new Hint(){
                    Id = Guid.NewGuid(),
                    Clue = "I can be peeled but I’m not a potato",
                    Show = false,
                    Price = 2
                },
                new Hint(){
                    Id = Guid.NewGuid(),
                    Clue = "I’m a fruit but I’m not an orange",
                    Show = false,
                    Price = 3
                },
                new Hint(){
                    Id = Guid.NewGuid(),
                    Clue = "I grow on trees but I’m not a banana",
                    Show = false,
                    Price = 4
                },

            };

            var level = new Level()
            {
                Id = Guid.NewGuid(),
                Clue = "I have skin but I’m not a person",
                Hints = hints,
                Secret = "APPLE",
                Difficulty = Enums.LevelDifficulty.VeryEasy
            };

            var response = new LevelResponse().Map(level);

            return Ok(response);
        }
    }
}
