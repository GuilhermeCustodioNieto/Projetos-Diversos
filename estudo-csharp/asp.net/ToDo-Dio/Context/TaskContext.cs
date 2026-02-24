using Microsoft.EntityFrameworkCore;
using ToDo_Dio.Models;

namespace ToDo_Dio.Context
{
    public class TaskContext : DbContext
    {
        public TaskContext(DbContextOptions<TaskContext> options) : base(options) { }

        public DbSet<TodoTask> Tasks { get; set; }
    }
}
