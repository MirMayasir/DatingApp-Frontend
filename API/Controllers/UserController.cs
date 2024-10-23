using DatingAppAPI.Data;
using DatingAppAPI.Interfaces;
using DatingAppAPI.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _context;
        
        public UserController(IUserRepository context)
        {
            _context = context;
        }

        
        [HttpGet]
        public async Task<ActionResult<List<AppUser>>> getAll()
        {
            var users =  await _context.GetAllUsersAsync();
            return Ok(users);

        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<AppUser>> getById(int id)
        {
            var user =  await _context.GetByIdAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);

        }

        [HttpGet("{username}")]
        public async Task<ActionResult<AppUser>> getByUsername(string name)
        {
            var user = await _context.GetByNameAsync(name);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);

        }





    }
}
