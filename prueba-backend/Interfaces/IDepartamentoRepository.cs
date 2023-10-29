using prueba_backend.Dto;
using prueba_backend.Entities;

namespace prueba_backend.Interfaces
{
    public interface IDepartamentoRepository
    {
        Task<PagedList<Departamento>> GetDepartamentos(Pagination pagination);
        Task<Departamento?> GetDepartamentoById(int id);
    }
}
