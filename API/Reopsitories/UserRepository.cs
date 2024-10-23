using DatingAppAPI.Data;
using DatingAppAPI.Interfaces;
using DatingAppAPI.Model;
using Microsoft.EntityFrameworkCore;

namespace DatingAppAPI.Reopsitories
{
    public class UserRepository(DatabaseContext contex) : IUserRepository
    {
        public async Task<IEnumerable<AppUser>> GetAllUsersAsync()
        {
            return await contex.Users.ToListAsync();            
        }

        public async Task<AppUser?> GetByIdAsync(int id)
        {
            return await contex.Users.FindAsync(id);
        }

        public async Task<AppUser?> GetByNameAsync(string name)
        {
            return await contex.Users.SingleOrDefaultAsync(x => x.UserName == name);
            
        }

        public async Task<bool> SaveAllAsync()
        {
            return await contex.SaveChangesAsync() > 0;
        }

        public void Update(AppUser user)
        {
            contex.Entry(user).State = EntityState.Modified;
        }
    }
}
