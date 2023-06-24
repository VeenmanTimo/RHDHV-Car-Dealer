using Domain;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure;

internal class DatabaseContext : DbContext
{
    public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
    {
    }

    public DbSet<CarModel> Cars { get; set; }
}
