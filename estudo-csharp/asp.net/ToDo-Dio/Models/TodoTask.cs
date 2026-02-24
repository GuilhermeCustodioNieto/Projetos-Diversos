using ToDo_Dio.Models.Enums;

namespace ToDo_Dio.Models
{
    public class TodoTask
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public Status Status { get; set; }
    }
}
