using System.ComponentModel.DataAnnotations.Schema;

namespace prueba_backend.Dto
{
    public class UsuarioRequestDto
    {
        public int id { get; set; } = 0;
        public string usuario { get; set; } = string.Empty;
        public string correo { get; set; } = string.Empty;
        public string primerNombre { get; set; } = string.Empty;
        public string segundoNombre { get; set; } = string.Empty;
        public string primerApellido { get; set; } = string.Empty;
        public string segundoApellido { get; set; } = string.Empty;
        public int idCargo { get; set; }
        public int idDepartamento { get; set; }
    }
}
