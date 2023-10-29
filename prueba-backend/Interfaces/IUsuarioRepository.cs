using prueba_backend.Dto;
using prueba_backend.Entities;

namespace prueba_backend.Interfaces
{
    public interface IUsuarioRepository
    {
        Task<PagedList<Usuario>> getUsuarios(Pagination pagination);
        Task<Usuario?> getUsuarioById(int id);
        Task<Usuario?> getUsuarioByEmail(string email);
        Task<Usuario> createUsuario(UsuarioRequestDto usuario);
        Task<Usuario> updateUsuario(UsuarioRequestDto usuario);
        Task<int> DeleteUsuario(Usuario usuario);
    }
}
