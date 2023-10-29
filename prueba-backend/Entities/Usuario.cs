using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace prueba_backend.Entities
{
    public class Usuario : BaseEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public string usuario { get; set; }
        public string primerNombre { get; set; }
        public string segundoNombre { get; set; }
        public string primerApellido { get; set; }
        public string segundoApellido { get; set; }
        public string correo { get; set; }
        [ForeignKey("Cargo")]
        public int idCargo { get; set; }
        [ForeignKey("Departamento")]
        public int idDepartamento { get; set; }
        public Departamento? Departamento { get; set;}
      
        public Cargo? Cargo { get; set; }

    }
}
