using DatingAppAPI.Interfaces;
using DatingAppAPI.Model;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace DatingAppAPI.Services
{
    public class TokenService(IConfiguration config) : ITokenService
    {
        public string CreateToken(AppUser user)
        {
            var tokenkey = config["TokenKey"] ?? throw new Exception("cannot access the tokenkey from appsettings");
            if (tokenkey.Length < 64) throw new Exception("your token needs to be longer");

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenkey));

            var claims = new List<Claim>
            {
                new(ClaimTypes.NameIdentifier, user.UserName),
            };

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);


            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor); 
            return tokenHandler.WriteToken(token);
        }
    }
}
