/*using DatingAppAPI.Model;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;

namespace DatingAppAPI.Data
{
    public class Seed
    {
        public static async Task SeedUsers(DatabaseContext dbContext)
        {
            if (await dbContext.Users.AnyAsync()) return;

            var userData = await File.ReadAllTextAsync("Data/DataSeed.json");
            var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
            if (userData == null) { return; }

            var users = JsonSerializer.Deserialize<List<AppUser>>(userData, options);


            foreach (var user in users)
            {
                using var hmac = new HMACSHA512();
                user.UserName = user.UserName.ToLower();

                user.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes("Pa$$w0rd"));
                user.PasswordSalt = hmac.Key;
                dbContext.Users.Add(user);
            }
            await dbContext.SaveChangesAsync();
        }
    }
}
*/