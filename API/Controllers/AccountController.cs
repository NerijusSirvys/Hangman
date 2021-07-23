using Api.Models;
using Api.Responses;
using API.Models;
using API.Requests;
using API.Responses;
using API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<Player> _userManager;
        private readonly SignInManager<Player> _signinManager;
        private readonly TokenService _tokenService;

        public AccountController(UserManager<Player> userManager, SignInManager<Player> signinManager, TokenService tokenService)
        {
            _userManager = userManager;
            _signinManager = signinManager;
            _tokenService = tokenService;
        }
        [HttpPost("register")]
        public async Task<ActionResult> Register([FromBody] RegisterRequest request)
        {
            if (await _userManager.Users.AnyAsync(x => x.UserName == request.UserName))
            {
                return BadRequest("User name is taken");
            }

            var player = new Player
            {
                UserName = request.UserName,
                Stars = 0,
                CompleteLevels = new List<CompleteLevel>(),
                Score = 0,
            };

            var result = await _userManager.CreateAsync(player, request.Password);

            if (!result.Succeeded)
            {
                return BadRequest(result.Errors.Select(x => x.Description));
            }

            return Ok();
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login([FromBody] LoginRequest request)
        {
            var player = _userManager.FindByNameAsync(request.UserName).Result;

            if(player is null)
            {
                return Unauthorized();
            }

            var signinResult = await _signinManager.CheckPasswordSignInAsync(player, request.Password, false);

            if (!signinResult.Succeeded)
            {
                return Unauthorized();
            }

            var loginResponse = new LoginResponse()
            {
                UserName = request.UserName,
                Token = _tokenService.CreateToken(player)
            };

            return Ok(loginResponse);
        }

        [Authorize]
        [HttpGet("getPlayer")]
        public async Task<ActionResult> GetPlayer()
        {
            var player = await _userManager.FindByNameAsync(User.FindFirstValue(ClaimTypes.Name));

            return Ok(new PlayerResponse().Map(player));
        }
    }
}
