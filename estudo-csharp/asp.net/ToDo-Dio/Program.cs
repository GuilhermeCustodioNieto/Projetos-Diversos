using Microsoft.EntityFrameworkCore;
using ToDo_Dio.Context;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<TaskContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("conexaoPadrao")));

builder.Services.AddControllers();
// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapControllers();
app.Run();