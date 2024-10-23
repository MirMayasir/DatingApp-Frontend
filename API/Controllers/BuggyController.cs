using DatingAppAPI.Data;
using DatingAppAPI.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DatingAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuggyController : ControllerBase
    {
        private readonly DatabaseContext _dbContext;

        public BuggyController(DatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetAuth()
        {
            return "secret-key";
        }


        [HttpGet("not-found")]
        public ActionResult<AppUser> userNotFound()
        {
            var thing = _dbContext.Users.Find(-1);
            if(thing == null)
            {
                return NotFound();
            }

            return thing;
        }

        [HttpGet("server-error")]
        public ActionResult<AppUser> ServerError()
        {
            try
            {
                var thing = _dbContext.Users.Find(-1);
                if (thing == null)
                {
                    throw new Exception("A bad thing has happened");
                }
                return Ok(thing);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = ex.Message });
            }
        }


        [HttpGet("bad-request")]
        public ActionResult<AppUser> getBadRequest()
        {
            return BadRequest("this was not a good request");
        }
    }
}
