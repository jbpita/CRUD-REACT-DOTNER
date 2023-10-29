using prueba_backend.Dto;
using prueba_backend.Entities;

namespace prueba_backend.Interfaces
{
    public interface ICargoRepository
    {
        Task<PagedList<Cargo>> GetCargos(Pagination pagination);
        Task<Cargo?> GetCargoById(int id);
    }
}
