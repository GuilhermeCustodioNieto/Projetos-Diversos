using CreditApi.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace CreditApi.Infraestructure.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<User> Users => Set<User>();

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
    }
}
