using DatingAppAPI.Model;
using Microsoft.EntityFrameworkCore;

namespace DatingAppAPI.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if(!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server = LAPTOP-EVDOJPLN\\SQLEXPRESS01;Database=datingDB;Trusted_Connection = True;Encrypt=false");
            }
        }

        public virtual DbSet<AppUser> Users { get; set; }
    }
}
