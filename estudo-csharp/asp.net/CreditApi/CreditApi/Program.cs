using CreditApi.Infraestructure.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
// Add services to the container.

var app = builder.Build();

app.MapGet("/", () => "Hello, world");

app.UseHttpsRedirection();
app.Run();