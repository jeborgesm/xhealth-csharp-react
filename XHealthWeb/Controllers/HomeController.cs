using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using XHealthWeb.Data;
using XHealthWeb.Models;

namespace XHealthWeb.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : Controller
    {
        private readonly ApplicationDbContext _context;

        public HomeController(ApplicationDbContext context)
        {
            _context = context;
        }

        // CRUD operations for Patient
        [HttpGet("patients")]
        public async Task<IActionResult> GetPatients()
        {
            var patients = await _context.Patients.ToListAsync();
            return Ok(patients);
        }

        [HttpGet("patients/{id}")]
        public async Task<IActionResult> GetPatient(int id)
        {
            var patient = await _context.Patients.FindAsync(id);
            if (patient == null)
            {
                return NotFound();
            }
            return Ok(patient);
        }

        [HttpPost("patients")]
        public async Task<IActionResult> AddPatient([FromBody] Patient patient)
        {
            if (ModelState.IsValid)
            {
                _context.Patients.Add(patient);
                await _context.SaveChangesAsync();
                return Ok(patient);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("patients/{id}")]
        public async Task<IActionResult> UpdatePatient(int id, [FromBody] Patient patient)
        {
            if (id != patient.Id)
            {
                return BadRequest();
            }

            _context.Entry(patient).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PatientExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("patients/{id}")]
        public async Task<IActionResult> DeletePatient(int id)
        {
            var patient = await _context.Patients.FindAsync(id);
            if (patient == null)
            {
                return NotFound();
            }

            _context.Patients.Remove(patient);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PatientExists(int id)
        {
            return _context.Patients.Any(e => e.Id == id);
        }

        // CRUD operations for Account
        [HttpGet("accounts")]
        public async Task<IActionResult> GetAccounts()
        {
            var accounts = await _context.Accounts.ToListAsync();
            return Ok(accounts);
        }

        [HttpGet("accounts/{id}")]
        public async Task<IActionResult> GetAccount(int id)
        {
            var account = await _context.Accounts.FindAsync(id);
            if (account == null)
            {
                return NotFound();
            }
            return Ok(account);
        }

        [HttpPost("accounts")]
        public async Task<IActionResult> AddAccount([FromBody] Account account)
        {
            if (ModelState.IsValid)
            {
                _context.Accounts.Add(account);
                await _context.SaveChangesAsync();
                return Ok(account);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("accounts/{id}")]
        public async Task<IActionResult> UpdateAccount(int id, [FromBody] Account account)
        {
            if (id != account.Id)
            {
                return BadRequest();
            }

            _context.Entry(account).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccountExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("accounts/{id}")]
        public async Task<IActionResult> DeleteAccount(int id)
        {
            var account = await _context.Accounts.FindAsync(id);
            if (account == null)
            {
                return NotFound();
            }

            _context.Accounts.Remove(account);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AccountExists(int id)
        {
            return _context.Accounts.Any(e => e.Id == id);
        }
        // CRUD operations for AccountInsurance
        [HttpGet("accountinsurances")]
        public async Task<IActionResult> GetAccountInsurances()
        {
            var accountInsurances = await _context.AccountInsurances.ToListAsync();
            return Ok(accountInsurances);
        }

        [HttpGet("accountinsurances/{accountId}/{insuranceId}")]
        public async Task<IActionResult> GetAccountInsurance(int accountId, int insuranceId)
        {
            var accountInsurance = await _context.AccountInsurances.FindAsync(accountId, insuranceId);
            if (accountInsurance == null)
            {
                return NotFound();
            }
            return Ok(accountInsurance);
        }

        [HttpPost("accountinsurances")]
        public async Task<IActionResult> AddAccountInsurance([FromBody] AccountInsurance accountInsurance)
        {
            if (ModelState.IsValid)
            {
                _context.AccountInsurances.Add(accountInsurance);
                await _context.SaveChangesAsync();
                return Ok(accountInsurance);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("accountinsurances/{accountId}/{insuranceId}")]
        public async Task<IActionResult> UpdateAccountInsurance(int accountId, int insuranceId, [FromBody] AccountInsurance accountInsurance)
        {
            if (accountId != accountInsurance.AccountId || insuranceId != accountInsurance.InsuranceId)
            {
                return BadRequest();
            }

            _context.Entry(accountInsurance).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccountInsuranceExists(accountId, insuranceId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("accountinsurances/{accountId}/{insuranceId}")]
        public async Task<IActionResult> DeleteAccountInsurance(int accountId, int insuranceId)
        {
            var accountInsurance = await _context.AccountInsurances.FindAsync(accountId, insuranceId);
            if (accountInsurance == null)
            {
                return NotFound();
            }

            _context.AccountInsurances.Remove(accountInsurance);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AccountInsuranceExists(int accountId, int insuranceId)
        {
            return _context.AccountInsurances.Any(e => e.AccountId == accountId && e.InsuranceId == insuranceId);
        }
        // CRUD operations for Client
        [HttpGet("clients")]
        public async Task<IActionResult> GetClients()
        {
            var clients = await _context.Clients.ToListAsync();
            return Ok(clients);
        }

        [HttpGet("clients/{id}")]
        public async Task<IActionResult> GetClient(int id)
        {
            var client = await _context.Clients.FindAsync(id);
            if (client == null)
            {
                return NotFound();
            }
            return Ok(client);
        }

        [HttpPost("clients")]
        public async Task<IActionResult> AddClient([FromBody] Client client)
        {
            if (ModelState.IsValid)
            {
                _context.Clients.Add(client);
                await _context.SaveChangesAsync();
                return Ok(client);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("clients/{id}")]
        public async Task<IActionResult> UpdateClient(int id, [FromBody] Client client)
        {
            if (id != client.Id)
            {
                return BadRequest();
            }

            _context.Entry(client).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClientExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("clients/{id}")]
        public async Task<IActionResult> DeleteClient(int id)
        {
            var client = await _context.Clients.FindAsync(id);
            if (client == null)
            {
                return NotFound();
            }

            _context.Clients.Remove(client);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ClientExists(int id)
        {
            return _context.Clients.Any(e => e.Id == id);
        }
        // CRUD operations for ExportHistory
        [HttpGet("exporthistories")]
        public async Task<IActionResult> GetExportHistories()
        {
            var exportHistories = await _context.ExportHistories.ToListAsync();
            return Ok(exportHistories);
        }

        [HttpGet("exporthistories/{id}")]
        public async Task<IActionResult> GetExportHistory(int id)
        {
            var exportHistory = await _context.ExportHistories.FindAsync(id);
            if (exportHistory == null)
            {
                return NotFound();
            }
            return Ok(exportHistory);
        }

        [HttpPost("exporthistories")]
        public async Task<IActionResult> AddExportHistory([FromBody] ExportHistory exportHistory)
        {
            if (ModelState.IsValid)
            {
                _context.ExportHistories.Add(exportHistory);
                await _context.SaveChangesAsync();
                return Ok(exportHistory);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("exporthistories/{id}")]
        public async Task<IActionResult> UpdateExportHistory(int id, [FromBody] ExportHistory exportHistory)
        {
            if (id != exportHistory.Id)
            {
                return BadRequest();
            }

            _context.Entry(exportHistory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExportHistoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("exporthistories/{id}")]
        public async Task<IActionResult> DeleteExportHistory(int id)
        {
            var exportHistory = await _context.ExportHistories.FindAsync(id);
            if (exportHistory == null)
            {
                return NotFound();
            }

            _context.ExportHistories.Remove(exportHistory);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ExportHistoryExists(int id)
        {
            return _context.ExportHistories.Any(e => e.Id == id);
        }
        // CRUD operations for Facility
        [HttpGet("facilities")]
        public async Task<IActionResult> GetFacilities()
        {
            var facilities = await _context.Facilities.ToListAsync();
            return Ok(facilities);
        }

        [HttpGet("facilities/{id}")]
        public async Task<IActionResult> GetFacility(int id)
        {
            var facility = await _context.Facilities.FindAsync(id);
            if (facility == null)
            {
                return NotFound();
            }
            return Ok(facility);
        }

        [HttpPost("facilities")]
        public async Task<IActionResult> AddFacility([FromBody] Facility facility)
        {
            if (ModelState.IsValid)
            {
                _context.Facilities.Add(facility);
                await _context.SaveChangesAsync();
                return Ok(facility);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("facilities/{id}")]
        public async Task<IActionResult> UpdateFacility(int id, [FromBody] Facility facility)
        {
            if (id != facility.Id)
            {
                return BadRequest();
            }

            _context.Entry(facility).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FacilityExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("facilities/{id}")]
        public async Task<IActionResult> DeleteFacility(int id)
        {
            var facility = await _context.Facilities.FindAsync(id);
            if (facility == null)
            {
                return NotFound();
            }

            _context.Facilities.Remove(facility);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FacilityExists(int id)
        {
            return _context.Facilities.Any(e => e.Id == id);
        }
        // CRUD operations for Insurance
        [HttpGet("insurances")]
        public async Task<IActionResult> GetInsurances()
        {
            var insurances = await _context.Insurances.ToListAsync();
            return Ok(insurances);
        }

        [HttpGet("insurances/{id}")]
        public async Task<IActionResult> GetInsurance(int id)
        {
            var insurance = await _context.Insurances.FindAsync(id);
            if (insurance == null)
            {
                return NotFound();
            }
            return Ok(insurance);
        }

        [HttpPost("insurances")]
        public async Task<IActionResult> AddInsurance([FromBody] Insurance insurance)
        {
            if (ModelState.IsValid)
            {
                _context.Insurances.Add(insurance);
                await _context.SaveChangesAsync();
                return Ok(insurance);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("insurances/{id}")]
        public async Task<IActionResult> UpdateInsurance(int id, [FromBody] Insurance insurance)
        {
            if (id != insurance.Id)
            {
                return BadRequest();
            }

            _context.Entry(insurance).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InsuranceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("insurances/{id}")]
        public async Task<IActionResult> DeleteInsurance(int id)
        {
            var insurance = await _context.Insurances.FindAsync(id);
            if (insurance == null)
            {
                return NotFound();
            }

            _context.Insurances.Remove(insurance);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InsuranceExists(int id)
        {
            return _context.Insurances.Any(e => e.Id == id);
        }

    }
}
