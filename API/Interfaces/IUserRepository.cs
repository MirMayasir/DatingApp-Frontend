using DatingAppAPI.Model;

namespace DatingAppAPI.Interfaces
{
    public interface IUserRepository
    {
        void Update(AppUser user);
        Task<bool> SaveAllAsync();
        Task<IEnumerable<AppUser>> GetAllUsersAsync();

        Task<AppUser?> GetByIdAsync(int id);

        Task<AppUser?> GetByNameAsync(string name);
    }
}
