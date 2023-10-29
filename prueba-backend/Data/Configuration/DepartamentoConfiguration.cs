using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using prueba_backend.Entities;

namespace prueba_backend.Data.Configuration
{
    public class DepartamentoConfiguration : IEntityTypeConfiguration<Departamento>
    {
        public void Configure(EntityTypeBuilder<Departamento> builder)
        {
            builder.ToTable("Departamento");

            builder.HasKey(e => e.id);
            builder.Property(e => e.id).HasColumnName("id");

            builder.Property(e => e.nombre)
                .HasColumnName("nombre");

            builder.Property(e => e.codigo)
                .HasColumnName("codigo");

            builder.Property(e => e.activo)
                .HasColumnName("activo");

            builder.Property(e => e.CreatedAt)
               .HasColumnType("datetime")
               .HasDefaultValue(DateTime.UtcNow)
               .HasColumnName("created_at");

            builder.Property(e => e.UpdatedAt)
                .HasColumnType("datetime")
                .HasColumnName("updated_at");

            builder.Property(e => e.DeletedAt)
                .HasColumnType("datetime")
                .HasColumnName("deleted_at");

            builder.Property(e => e.idUsuarioCreacion)
                .HasColumnName("idUsuarioCreacion");


        }
    }
}
