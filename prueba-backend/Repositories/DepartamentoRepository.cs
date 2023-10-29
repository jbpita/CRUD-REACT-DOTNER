using Microsoft.EntityFrameworkCore;
using prueba_backend.Data;
using prueba_backend.Dto;
using prueba_backend.Entities;
using prueba_backend.Interfaces;

namespace prueba_backend.Repositories
{
    public class DepartamentoRepository : IDepartamentoRepository
    {
        private readonly SqlServerContext _dbContext;

        public DepartamentoRepository(SqlServerContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<PagedList<Departamento>> GetDepartamentos(Pagination pagination)
        {
            IQueryable<Departamento> query = _dbContext.Departamentos;
            if (!string.IsNullOrEmpty(pagination.Search))
            {
                query = query.Where(muestra => muestra.nombre.Contains(pagination.Search));
            }
            int totalCount = await query.CountAsync();
            var pagedQuery = query.Skip((pagination.PageNumber - 1) * pagination.PageSize).Take(pagination.PageSize);
            List<Departamento> result = await pagedQuery.ToListAsync();

            return new PagedList<Departamento>(result,totalCount,pagination.PageNumber, pagination.PageSize);
        }

        public async Task<Departamento?> GetDepartamentoById(int id)
        {
            return await _dbContext.Departamentos.FindAsync(id);
        }

    }
}
