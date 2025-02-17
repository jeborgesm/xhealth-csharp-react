using XHealthWeb.Data;
using XHealthWeb.Models;
using Microsoft.EntityFrameworkCore;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace XHealthWeb.Services
{
    public class ExportService : IExportService
    {
        private readonly HealthCareContext _context;

        public ExportService(HealthCareContext context)
        {
            _context = context;
        }

        public async Task<string> ExportAccountsToFiles(int clientId)
        {
            var client = await _context.Clients
                .Include(c => c.Accounts)
                    .ThenInclude(a => a.Patient)
                .Include(c => c.Accounts)
                    .ThenInclude(a => a.Facility)
                .Include(c => c.Accounts)
                    .ThenInclude(a => a.AccountInsurances)
                        .ThenInclude(ai => ai.Insurance)
                .FirstOrDefaultAsync(c => c.Id == clientId);

            if (client == null)
                throw new InvalidOperationException("Client not found");

            var exportDirectory = Path.Combine(Directory.GetCurrentDirectory(), "Exports");
            Directory.CreateDirectory(exportDirectory);
            var date = DateTime.UtcNow.ToString("yyyy-MM-dd", CultureInfo.InvariantCulture);
            var files = new List<string>();

            var facilityGroups = client.Accounts
                .Where(a => a.Balance > 100.00m)
                .GroupBy(a => a.Facility.FacilityName);

            foreach (var group in facilityGroups)
            {
                var facilityName = group.Key;
                var sb = new StringBuilder();
                sb.AppendLine("AccountId,AccountNumber,Balance,FacilityName,AddressLine1,AddressLine2,City,State,Zip,AdmitDate,DischargeDate,PatientSSN,InsurancePlanName,InsurancePolicy,InsuranceGroupNumber");

                foreach (var account in group)
                {
                    var admitDate = account.AdmitDate.ToString("MM-dd-yyyy", CultureInfo.InvariantCulture);
                    var dischargeDate = account.DischargeDate?.ToString("MM-dd-yyyy", CultureInfo.InvariantCulture) ?? string.Empty;
                    var patientSSN = account.Patient.SocialSecurityNumber;

                    foreach (var insurance in account.AccountInsurances)
                    {
                        sb.AppendLine($"{account.Id},{account.AccountNumber},{account.Balance},{account.Facility.FacilityName},{account.Facility.AddressLine1},{account.Facility.AddressLine2},{account.Facility.City},{account.Facility.State},{account.Facility.Zip},{admitDate},{dischargeDate},{patientSSN},{insurance.Insurance.PlanName},{insurance.Insurance.Policy},{insurance.Insurance.GroupNumber}");
                    }
                }

                var fileName = $"export-{date}.{facilityName}.csv";
                var filePath = Path.Combine(exportDirectory, fileName);
                await File.WriteAllTextAsync(filePath, sb.ToString());
                files.Add(filePath);
            }

            return string.Join(",", files);
        }
    }
}