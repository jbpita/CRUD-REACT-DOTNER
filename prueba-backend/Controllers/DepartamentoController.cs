using Microsoft.AspNetCore.Mvc;
using prueba_backend.Dto;
using prueba_backend.Entities;
using prueba_backend.Interfaces;

namespace prueba_backend.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class DepartamentoController : ControllerBase
    {
        private readonly IDepartamentoRepository _departamentoRepository;
        public DepartamentoController(IDepartamentoRepository departamentoRepository)
        {
            _departamentoRepository = departamentoRepository;
        }

        [HttpPost("GetDepartamentos")]
        public async Task<ActionResult<ApiResponse<PagedList<Departamento>>>> GetDepartamentos(Pagination pagination)
        {
            ApiResponse<PagedList<Departamento>> rp;
            try
            {
                PagedList<Departamento> pagedList = await _departamentoRepository.GetDepartamentos(pagination);
                rp = new ApiResponse<PagedList<Departamento>>(pagedList);
                rp.Message = "Consulta realizada correctamente";
                rp.Succeeded = true;
            }
            catch (Exception ex)
            {
                rp = new ApiResponse<PagedList<Departamento>>(null, ex.Message, false);
                rp.Succeeded = false;
                rp.Message = ApiResponse<string>.Error;
            }
            return Ok(rp);
        }

        [HttpGet("GetDepartamentoById")]
        public async Task<ActionResult<ApiResponse<Departamento?>>> GetDepartamentoById(int id)
        {
            ApiResponse<Departamento> rp;
            try
            {
                Departamento? departamento = await _departamentoRepository.GetDepartamentoById(id);
                rp = new ApiResponse<Departamento>(departamento);
                rp.Message = "Consulta realizada correctamente";
                rp.Succeeded = true;
            }
            catch ( Exception ex )
            {
                rp = new ApiResponse<Departamento>(null, ex.Message, false);
                rp.Succeeded = false;
                rp.Message = ApiResponse<string>.Error;
            }
            return Ok(rp);
        }

    }
}
