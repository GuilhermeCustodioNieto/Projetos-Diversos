using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using ToDo_Dio.Context;

namespace ToDo_Dio.Controllers
{
    public class TaskController : ControllerBase
    {
        private readonly TaskContext _context;

        public TaskController(TaskContext context) 
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Tasks);
        }

        
    }
}
