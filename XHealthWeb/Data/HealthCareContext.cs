using Microsoft.EntityFrameworkCore;
using XHealthWeb.Models;

namespace XHealthWeb.Data
{
    public class HealthCareContext : DbContext
    {
        public HealthCareContext(DbContextOptions<HealthCareContext> options) : base(options)
        {
        }

        public DbSet<Client> Clients { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Insurance> Insurances { get; set; }
        public DbSet<AccountInsurance> AccountInsurances { get; set; } // Add this line
    }
}
