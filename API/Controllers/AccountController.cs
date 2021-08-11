using Api.Models;
using Api.Responses;
using API.Models;
using API.Repositories;
using API.Requests;
using API.Responses;
using API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        private readonly IRepository _repository;
        private readonly SignInManager<Player> _signinManager;
        private readonly TokenService _tokenService;
        private readonly UserManager<Player> _userManager;

        public AccountController
            (
            UserManager<Player> userManager,
            SignInManager<Player> signinManager,
            TokenService tokenService,
            IRepository repository
            )
        {
            _userManager = userManager;
            _signinManager = signinManager;
            _tokenService = tokenService;
            _repository = repository;
        }

        [Authorize]
        [HttpGet("getPlayer")]
        public async Task<ActionResult> GetPlayer()
        {
            var playerId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            var player = await _repository.GetPlayerByIdAsync(playerId);

            if(player is null)
            {
                return Unauthorized();
            }

            return Ok(new PlayerResponse().Map(player));
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login([FromBody] LoginRequest request)
        {
            var playerId = _userManager.FindByNameAsync(request.UserName).Result.Id;

            // getting player sepperately because i need to have complete levels included
            var player = _repository.GetPlayerByIdAsync(playerId).Result;

            if (player is null)
            {
                return Unauthorized();
            }

            var signinResult = await _signinManager.CheckPasswordSignInAsync(player, request.Password, false);

            if (!signinResult.Succeeded)
            {
                return Unauthorized();
            }

            var playerResponse = new PlayerResponse().Map(player);

            var loginResponse = new LoginResponse<PlayerResponse>(playerResponse)
            {
                Token = _tokenService.CreateToken(player)
            };

            return Ok(loginResponse);
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
                Levels = new List<AsignedLevel>(),
                Score = 0,
            };

            var result = await _userManager.CreateAsync(player, request.Password);

            if (!result.Succeeded)
            {
                return BadRequest(result.Errors.Select(x => x.Description));
            }

            return Ok();
        }
    }
}