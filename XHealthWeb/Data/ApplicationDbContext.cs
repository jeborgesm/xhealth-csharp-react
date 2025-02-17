using Microsoft.EntityFrameworkCore;
using XHealthWeb.Models;

namespace XHealthWeb.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Account> Accounts { get; set; }
        public DbSet<Facility> Facilities { get; set; }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Insurance> Insurances { get; set; }
        public DbSet<AccountInsurance> AccountInsurances { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<ExportHistory> ExportHistories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AccountInsurance>()
                .HasKey(ai => new { ai.AccountId, ai.InsuranceId });

            modelBuilder.Entity<AccountInsurance>()
                .HasOne(ai => ai.Account)
                .WithMany(a => a.AccountInsurances)
                .HasForeignKey(ai => ai.AccountId);

            modelBuilder.Entity<AccountInsurance>()
                .HasOne(ai => ai.Insurance)
                .WithMany(i => i.AccountInsurances)
                .HasForeignKey(ai => ai.InsuranceId);
        }
    }
}