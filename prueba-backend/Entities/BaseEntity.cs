namespace prueba_backend.Entities
{
    public class BaseEntity
    {
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime? UpdatedAt { get; set; }
        public DateTime? DeletedAt { get; set; }
        //public long? CreatedBy { get; set; }
        //public long? UpdatedBy { get; set; }
        //public long? DeletedBy { get; set; }
    }
}
