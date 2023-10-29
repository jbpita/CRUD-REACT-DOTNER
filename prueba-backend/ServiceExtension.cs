using Microsoft.EntityFrameworkCore;
using prueba_backend.Data;
using prueba_backend.Interfaces;
using prueba_backend.Repositories;

namespace prueba_backend
{
    public static class ServiceExtension
    {
        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            services.AddScoped<ICargoRepository, CargoRepository>();
            services.AddScoped<IDepartamentoRepository, DepartamentoRepository>();
            services.AddScoped<IUsuarioRepository, UsuarioRepository>();

            return services;
        }
        public static IServiceCollection AddDataBase(this IServiceCollection services, IConfiguration configuration, IWebHostEnvironment env)
        {
            if (env.IsProduction())
            {
                services.AddDbContextPool<SqlServerContext>(options =>
                {
                    options.UseSqlServer(configuration.GetConnectionString("Connection"));
                });
            }
            else
            {
                services.AddDbContext<SqlServerContext>(options =>
                {
                    //options.UseSqlite(configuration.GetConnectionString("DefaultConnection"));
                    options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
                });
            }

            return services;
        }
    }
}
