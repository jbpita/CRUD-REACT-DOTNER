using Microsoft.EntityFrameworkCore;
using prueba_backend.Data;
using prueba_backend.Dto;
using prueba_backend.Entities;
using prueba_backend.Interfaces;

namespace prueba_backend.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly SqlServerContext _dbContext;

        public UsuarioRepository(SqlServerContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<Usuario> createUsuario(UsuarioRequestDto usuario)
        {
            Usuario usr = new Usuario();
            usr.DeletedAt = null;
            usr.UpdatedAt = null;
            usr.CreatedAt = DateTime.Now;
            usr.usuario = usuario.usuario;
            usr.primerNombre = usuario.primerNombre;
            usr.segundoNombre = usuario.segundoNombre;
            usr.primerApellido = usuario.primerApellido;
            usr.segundoApellido = usuario.segundoApellido;
            usr.correo = usuario.correo;
            usr.idCargo = usuario.idCargo;
            usr.idDepartamento = usuario.idDepartamento;

            await _dbContext.Usuarios.AddAsync(usr);
            await _dbContext.SaveChangesAsync();
            return usr;
        }

        public async Task<int> DeleteUsuario(Usuario usuario)
        {
            usuario.DeletedAt = DateTime.Now;
            usuario.UpdatedAt = DateTime.Now;
            _dbContext.Usuarios.Update(usuario);
            await _dbContext.SaveChangesAsync();
            return usuario.id;
        }

        public async Task<Usuario?> getUsuarioByEmail(string email)
        { 
            IQueryable<Usuario> query = _dbContext.Usuarios;
            Usuario? usuario = new Usuario();
            if (!string.IsNullOrEmpty(email))
            {
                usuario = await query.FirstOrDefaultAsync(u => u.correo == email);
            }
            return usuario;
        }

        public async Task<Usuario?> getUsuarioById(int id)
        {
            return await _dbContext.Usuarios.FindAsync(id);
        }

        public async Task<PagedList<Usuario>> getUsuarios(Pagination pagination)
        {
            IQueryable<Usuario> query = _dbContext.Usuarios
                .Include(u => u.Departamento)
                .Include(u => u.Cargo);
            if (!string.IsNullOrEmpty(pagination.Search))
            {
                int searchAsInt;
                var isNumeric = int.TryParse(pagination.Search, out searchAsInt);

                if (isNumeric)
                {
                    query = query.Where(usuario => usuario.usuario.Contains(pagination.Search) ||
                                                   usuario.correo.Contains(pagination.Search) ||
                                                   usuario.idDepartamento == searchAsInt ||
                                                   usuario.idCargo == searchAsInt);
                }
                else
                {
                    query = query.Where(usuario => usuario.usuario.Contains(pagination.Search) ||
                                                   usuario.correo.Contains(pagination.Search));
                }
            }
            int totalCount = await query.CountAsync();
            var pagedQuery = query.Skip((pagination.PageNumber - 1) * pagination.PageSize).Take(pagination.PageSize);
            List<Usuario> result = await pagedQuery.ToListAsync();

            return new PagedList<Usuario>(result, totalCount, pagination.PageNumber, pagination.PageSize);
        }

        public async Task<Usuario> updateUsuario(UsuarioRequestDto usuario)
        {
            Usuario usr = new Usuario();
            usr.id = usuario.id;
            usr.usuario = usuario.usuario;
            usr.primerNombre = usuario.primerNombre;
            usr.segundoNombre = usuario.segundoNombre;
            usr.primerApellido = usuario.primerApellido;
            usr.segundoApellido = usuario.segundoApellido;
            usr.correo = usuario.correo;
            usr.idCargo = usuario.idCargo;
            usr.idDepartamento = usuario.idDepartamento;

            _dbContext.Usuarios.Update(usr);
            await _dbContext.SaveChangesAsync();
            return usr;
        }
    }
}
