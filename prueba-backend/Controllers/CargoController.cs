using Microsoft.AspNetCore.Mvc;
using prueba_backend.Dto;
using prueba_backend.Entities;
using prueba_backend.Interfaces;

namespace prueba_backend.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class CargoController : ControllerBase
    {
        private readonly ICargoRepository _cargoRepository;
        public CargoController(ICargoRepository cargoRepository)
        {
            _cargoRepository = cargoRepository;
        }

        [HttpPost("GetCargos")]
        public async Task<ActionResult<ApiResponse<PagedList<Cargo>>>> GetCargos(Pagination pagination)
        {
            ApiResponse<PagedList<Cargo>> rp;
            try
            {
                PagedList<Cargo> pagedList = await _cargoRepository.GetCargos(pagination);
                rp = new ApiResponse<PagedList<Cargo>>(pagedList);
                rp.Message = "Consulta realizada correctamente";
                rp.Succeeded = true;
            }
            catch (Exception ex)
            {
                rp = new ApiResponse<PagedList<Cargo>>(null, ex.Message, false);
                rp.Succeeded = false;
                rp.Message = ApiResponse<string>.Error;
            }
            return Ok(rp);
        }

        [HttpGet("GetCargoById")]
        public async Task<ActionResult<ApiResponse<Cargo?>>> GetCargoById(int id)
        {
            ApiResponse<Cargo> rp;
            try
            {
                Cargo? cargo = await _cargoRepository.GetCargoById(id);
                rp = new ApiResponse<Cargo>(cargo);
                rp.Message = "Consulta realizada correctamente";
                rp.Succeeded = true;
            }
            catch (Exception ex)
            {
                rp = new ApiResponse<Cargo>(null, ex.Message, false);
                rp.Succeeded = false;
                rp.Message = ApiResponse<string>.Error;
            }
            return Ok(rp);
        }
    }
}
