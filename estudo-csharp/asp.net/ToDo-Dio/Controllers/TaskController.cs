using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using ToDo_Dio.Context;
using ToDo_Dio.Models;
using ToDo_Dio.Models.Enums;

namespace ToDo_Dio.Controllers
{
    [ApiController]
    [Route("Task")]
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

        [HttpGet("FindById/{id}")]
        public IActionResult GetById(int id)
        {
            var tasks = _context.Tasks.Where(x => x.Id == id);
            if (tasks.IsNullOrEmpty())
            {
                return NotFound();
            }

            return Ok(tasks);
        }

        [HttpGet("FindByTitle/{title}")]
        public IActionResult GetByTitle(string title)
        {
            var tasks = _context.Tasks.Where(x => x.Title == title);
            if (tasks.IsNullOrEmpty())
            {
                return NotFound();
            }

            return Ok(tasks);
        }

        [HttpGet("FindByDate/{date}")]
        public IActionResult GetByDate(DateTime date)
        {
            var tasks = _context.Tasks.Where(x => x.Date == date);
            if (tasks.IsNullOrEmpty())
            {
                return NotFound();
            }

            return Ok(tasks);
        }

        [HttpGet("FindByStatus/{status}")]
        public IActionResult GetByStatus(Status status)
        {
            var tasks = _context.Tasks.Where(x => x.Status == status);
            if (tasks.IsNullOrEmpty())
            {
                return NotFound();
            }

            return Ok(tasks);
        }

        [HttpPost]
        public IActionResult Post([FromBody] TodoTask task) {
            _context.Tasks.Add(task);
            _context.SaveChanges();
            return Ok(task);
        }

        [HttpPut("{id}")]
        public IActionResult Put([FromBody] TodoTask task, int id)
        {
            var taskFinded = _context.Tasks.Find(id);

            if (taskFinded == null) { 
                return NotFound();
            }

            task.Id = id;
            task.Description = taskFinded.Description;
            task.Date = taskFinded.Date;
            task.Status = taskFinded.Status;
            task.Title = taskFinded.Title;

            _context.SaveChanges();

            return Ok(task);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var taskFinded = _context.Tasks.First(_x => _x.Id == id);
            _context.Tasks.Remove(taskFinded);


        _context.SaveChanges();

            return Ok(taskFinded);
        }
        

    }
}
