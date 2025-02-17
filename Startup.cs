using ClientExportAPI.Data;
using Microsoft.EntityFrameworkCore;

/// <summary>
/// Configures services and the application's request pipeline.
/// </summary>
public class Startup
{
    /// <summary>
    /// Configures services for the application.
    /// </summary>
    /// <param name="services">The collection of services to configure.</param>
    public void ConfigureServices(IServiceCollection services)
    {
        // Configure Entity Framework to use an in-memory database
        services.AddDbContext<ApplicationDbContext>(options =>
            options.UseInMemoryDatabase("ClientExportDb"));
        
        // Add controllers to the services collection
        services.AddControllers();
    }

    /// <summary>
    /// Configures the application's request pipeline.
    /// </summary>
    /// <param name="app">The application builder to configure.</param>
    /// <param name="env">The hosting environment the application is running in.</param>
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        // Use developer exception page in development
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }

        // Use routing middleware
        app.UseRouting();

        // Configure endpoints for controllers
        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });
    }
}
