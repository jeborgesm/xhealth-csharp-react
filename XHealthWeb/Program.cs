using Microsoft.EntityFrameworkCore;
using XHealthWeb.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

// Register ApplicationDbContext with the connection string from appsettings.json
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles(); // Enable serving static files from wwwroot

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();
app.MapControllers();

// Serve React app for all unknown routes
app.MapFallbackToFile("{*path:nonfile}", "index.html");

// Disable Browser Link
app.Use((context, next) =>
{
    context.Response.Headers.Remove("X-BrowserLink");
    return next();
});

app.Run();

