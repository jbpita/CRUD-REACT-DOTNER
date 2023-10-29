using prueba_backend.Entities;

namespace prueba_backend.Data
{
    public class SqlServerContextSeed
    {
        public static void SeedData(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                //Seed(serviceScope.ServiceProvider.GetService<SqlServerContext>());
            }
        }

        private static void Seed(SqlServerContext dbContext)
        {
            if (!dbContext.Departamentos.Any())
            {
                dbContext.Departamentos.AddRange(GetDepartamentos());
                dbContext.SaveChanges();
                dbContext.Cargos.AddRange(GetCargo());
                dbContext.SaveChanges();
                Console.WriteLine($"Tabla Estado: {typeof(SqlServerContext).Name} seeded.");
            }
        }

        private static IEnumerable<Departamento> GetDepartamentos()
        {
            return new List<Departamento>
            {
                new()
                {
                    activo = true,
                    nombre = "Tecnologías de la información",
                    codigo = "TIC",
                    CreatedAt = DateTime.Now,
                    UpdatedAt = null,
                    DeletedAt = null,
                    idUsuarioCreacion = null
                },
                new()
                {
                    activo = true,
                    nombre = "Legal",
                    codigo = "LGA",
                    CreatedAt = DateTime.Now,
                    UpdatedAt = null,
                    DeletedAt = null,
                    idUsuarioCreacion = null
                },
                new()
                {
                    activo = true,
                    nombre = "Seguridad",
                    codigo = "SEG",
                    CreatedAt = DateTime.Now,
                    UpdatedAt = null,
                    DeletedAt = null,
                    idUsuarioCreacion = null
                },
                new()
                {
                    activo = true,
                    nombre = "Eventos y Buffets",
                    codigo = "SEG",
                    CreatedAt = DateTime.Now,
                    UpdatedAt = null,
                    DeletedAt = null,
                    idUsuarioCreacion = null
                }
            };
        }

        private static IEnumerable<Cargo> GetCargo()
        {
            return new List<Cargo>
            {
                new()
                {
                    activo = true,
                    nombre = "Administrador",
                    codigo = "ADM",
                    CreatedAt = DateTime.Now,
                    UpdatedAt = null,
                    DeletedAt = null,
                    idUsuarioCreacion = null
                },
                new()
                {
                    activo = true,
                    nombre = "Desarrollador Frontend",
                    codigo = "DEVFRT",
                    CreatedAt = DateTime.Now,
                    UpdatedAt = null,
                    DeletedAt = null,
                    idUsuarioCreacion = null
                },
                new()
                {
                    activo = true,
                    nombre = "Abogado",
                    codigo = "ABG",
                    CreatedAt = DateTime.Now,
                    UpdatedAt = null,
                    DeletedAt = null,
                    idUsuarioCreacion = null
                },
                new()
                {
                    activo = true,
                    nombre = "Guardia",
                    codigo = "GDA",
                    CreatedAt = DateTime.Now,
                    UpdatedAt = null,
                    DeletedAt = null,
                    idUsuarioCreacion = null
                },
                new()
                {
                    activo = true,
                    nombre = "Pollero",
                    codigo = "POL",
                    CreatedAt = DateTime.Now,
                    UpdatedAt = null,
                    DeletedAt = null,
                    idUsuarioCreacion = null
                }
            };
        }

    }
}
