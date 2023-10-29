using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using prueba_backend.Dto;
using prueba_backend.Entities;
using prueba_backend.Interfaces;
using prueba_backend.Repositories;

namespace prueba_backend.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioRepository _usuarioRepository;
        public UsuarioController(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        [HttpGet("getUsuarioByEmail")]
        public async Task<ActionResult<Usuario?>> getUsuarioByEmail(string email)
        {
            ApiResponse<Usuario> rp;
            try
            {
                Usuario? usuario = await _usuarioRepository.getUsuarioByEmail(email);
                rp = new ApiResponse<Usuario>(usuario);
                rp.Message = "Consulta realizada correctamente";
                rp.Succeeded = true;
            }
            catch(Exception ex)
            {
                rp = new ApiResponse<Usuario>(null, ex.Message, false);
                rp.Succeeded = false;
                rp.Message = ApiResponse<string>.Error;
            }
            return Ok(rp);
        }

        [HttpGet("getUsuarioById")]
        public async Task<ActionResult<Usuario?>> getUsuarioById(int id)
        {
            ApiResponse<Usuario> rp;
            try
            {
                Usuario? usuario = await _usuarioRepository.getUsuarioById(id);
                rp = new ApiResponse<Usuario>(usuario);
                rp.Message = "Consulta realizada correctamente";
                rp.Succeeded = true;
            }
            catch(Exception ex)
            {
                rp = new ApiResponse<Usuario>(null, ex.Message, false);
                rp.Succeeded = false;
                rp.Message = ApiResponse<string>.Error;
            }
            return Ok(rp);
        }

        [HttpPost("getUsuarios")]
        public async Task<ActionResult<PagedList<Usuario>>> getUsuarios(Pagination pagination)
        {
            ApiResponse<PagedList<Usuario>> rp;
            try
            {
                PagedList<Usuario> pagedList = await _usuarioRepository.getUsuarios(pagination);
                rp = new ApiResponse<PagedList<Usuario>>(pagedList);
                rp.Message = "Consulta realizada correctamente";
                rp.Succeeded = true;
            }
            catch (Exception ex)
            {
                rp = new ApiResponse<PagedList<Usuario>>(null, ex.Message, false);
                rp.Succeeded = false;
                rp.Message = ApiResponse<string>.Error;
            }
            return Ok(rp);
        }

        [HttpPost("createUsuario")]
        public async Task<ActionResult<Usuario?>> createUsuario(UsuarioRequestDto usuario)
        {
            ApiResponse<Usuario> rp;
            try
            {
                Usuario usr = await _usuarioRepository.createUsuario(usuario);
                rp = new ApiResponse<Usuario>(usr);
                rp.Message = "Usuario creado correctamente";
                rp.Succeeded = true;
            }
            catch (Exception ex)
            {
                rp = new ApiResponse<Usuario>(null, ex.Message, false);
                rp.Succeeded = false;
                rp.Message = ApiResponse<string>.Error;
            }
            return Ok(rp);
        }

        [HttpPut("updateUsuario")]
        public async Task<ActionResult<Usuario?>> updateUsuario(UsuarioRequestDto usuario)
        {
            ApiResponse<Usuario> rp;
            try
            {
                Usuario usr = await _usuarioRepository.updateUsuario(usuario);
                rp = new ApiResponse<Usuario>(usr);
                rp.Message = "Usuario actualizado correctamente";
                rp.Succeeded = true;
            }
            catch (Exception ex)
            {
                rp = new ApiResponse<Usuario>(null, ex.Message, false);
                rp.Succeeded = false;
                rp.Message = ApiResponse<string>.Error;
            }
            return Ok(rp);
        }

        [HttpPut("DeleteUsuario")]
        public async Task<ActionResult<int>> DeleteUsuario(Usuario usuario)
        {
            ApiResponse<int> rp;
            try
            {
                int id = await _usuarioRepository.DeleteUsuario(usuario);
                rp = new ApiResponse<int>(id);
                rp.Message = "Usuario inactivado correctamente";
                rp.Succeeded = true;
            }
            catch (Exception ex)
            {
                rp = new ApiResponse<int>(0, ex.Message, false);
                rp.Succeeded = false;
                rp.Message = ApiResponse<string>.Error;
            }
            return Ok(rp);
        }

    }
}
