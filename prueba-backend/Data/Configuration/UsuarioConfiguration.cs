using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using prueba_backend.Entities;

namespace prueba_backend.Data.Configuration
{
    public class UsuarioConfiguration : IEntityTypeConfiguration<Usuario>
    {
        public void Configure(EntityTypeBuilder<Usuario> builder)
        {
            builder.ToTable("Usuario");

            builder.HasKey(e => e.id);
            builder.Property(e => e.id)
                .HasColumnName("id");

            builder.Property(e => e.usuario)
                .HasColumnName("usuario");

            builder.Property(e => e.primerNombre)
                .HasColumnName("primerNombre");

            builder.Property(e => e.segundoNombre)
                .HasColumnName("segundoNombre");

            builder.Property(e => e.primerApellido)
                .HasColumnName("primerApellido");

            builder.Property(e => e.segundoApellido)
                .HasColumnName("segundoApellido");

            // Configuración de relaciones

            builder.HasOne(e => e.Cargo)
                .WithMany()
                .HasForeignKey(e => e.idCargo)
                .OnDelete(DeleteBehavior.Restrict);
            
            builder.HasOne(e => e.Departamento)
                .WithMany()
                .HasForeignKey(e => e.idDepartamento)
                .OnDelete(DeleteBehavior.Restrict);


        }

    }
}
