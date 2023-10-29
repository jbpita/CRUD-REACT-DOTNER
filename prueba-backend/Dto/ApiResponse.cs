namespace prueba_backend.Dto
{
    public class ApiResponse<T>
    {
        public const string Error = "Error al realizar la petición";
        public bool Succeeded { get; set; }
        public string Message { get; set; } = string.Empty;
        public T? Data { get; set; }
        public IDictionary<string, string>? Errors { get; set; }
        public ApiResponse() { }
        public ApiResponse(T? data, string message = "")
        {
            Succeeded = true;
            Message = message;
            Data = data;
        }
        public ApiResponse(T? data, string message, bool isOk)
        {
            Succeeded = isOk;
            Message = message;
            Data = data;
        }
        public ApiResponse(string message, bool isOk = false)
        {
            Message = message;
            Succeeded = isOk;
        }
        public ApiResponse(string message, IDictionary<string, string> errors, bool isOk = false)
        {
            Message = message;
            Succeeded = isOk;
            Errors = errors;
        }
    }

    public class PagedList<T>
    {
        public List<T> Items { get; set; } = new List<T>();
        public int TotalCount { get; set; }
        public int PageNumber { get; set; }
        public int PageSize { get; set; }

        public PagedList(List<T> items, int totalCount, int pageNumber, int pageSize)
        {
            Items = items;
            TotalCount = totalCount;
            PageNumber = pageNumber;
            PageSize = pageSize;
        }
    }
    public class Pagination
    {
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
        public string Search { get; set; }
    }
}
