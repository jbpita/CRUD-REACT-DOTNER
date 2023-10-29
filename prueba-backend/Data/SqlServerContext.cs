using Microsoft.EntityFrameworkCore;
using prueba_backend.Entities;
using System.Reflection;

namespace prueba_backend.Data
{
    public class SqlServerContext : DbContext
    {
        public DbSet<Departamento> Departamentos { get; set; }

        public DbSet<Cargo> Cargos { get; set; }

        public DbSet<Usuario> Usuarios { get; set; }

        public SqlServerContext(DbContextOptions<SqlServerContext> options) : base(options) {}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}
