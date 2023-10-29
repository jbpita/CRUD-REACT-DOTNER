using prueba_backend;
using prueba_backend.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.+
builder.Services.AddDataBase(builder.Configuration, builder.Environment);
builder.Services.AddControllers();
builder.Services.AddServices();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    SqlServerContextSeed.SeedData(app);
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors(builder =>
            builder.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader()
        );

app.MapControllers();

app.Run();
