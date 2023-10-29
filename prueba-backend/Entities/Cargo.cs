using System.ComponentModel.DataAnnotations.Schema;

namespace prueba_backend.Entities
{
    public class Cargo : BaseEntity
    {
        public int id { get; set; }
        public string codigo { get; set; }
        public string nombre { get; set; }
        public bool activo { get; set; }
        public int? idUsuarioCreacion { get; set; }
   
    }
}
