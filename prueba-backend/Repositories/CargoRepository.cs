using Microsoft.EntityFrameworkCore;
using prueba_backend.Data;
using prueba_backend.Dto;
using prueba_backend.Entities;
using prueba_backend.Interfaces;

namespace prueba_backend.Repositories
{
    public class CargoRepository : ICargoRepository
    {
        private readonly SqlServerContext _dbContext;


        public CargoRepository(SqlServerContext dbContext)
        {
            _dbContext = dbContext;
        }   

        public async Task<Cargo?> GetCargoById(int id)
        {
            return await _dbContext.Cargos.FindAsync(id);
        }

        public async Task<PagedList<Cargo>> GetCargos(Pagination pagination)
        {
            IQueryable<Cargo> query = _dbContext.Cargos;
            if (!string.IsNullOrEmpty(pagination.Search))
            {
                query = query.Where(muestra => muestra.nombre.Contains(pagination.Search));
            }
            int totalCount = await query.CountAsync();
            var pagedQuery = query.Skip((pagination.PageNumber - 1) * pagination.PageSize).Take(pagination.PageSize);
            List<Cargo> result = await pagedQuery.ToListAsync();

            return new PagedList<Cargo>(result, totalCount, pagination.PageNumber, pagination.PageSize);
        }
    }
}
