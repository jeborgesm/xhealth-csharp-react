using Microsoft.AspNetCore.Mvc;
using XHealthWeb.Data;
using XHealthWeb.Models;
using Microsoft.EntityFrameworkCore;

namespace XHealthWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExportHistoryController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ExportHistoryController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ExportHistory>>> GetExportHistories()
        {
            return await _context.ExportHistories.Include(e => e.Client).ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<ExportHistory>>> GetExportHistoriesForClient(int id)
        {
            return await _context.ExportHistories.Where(e => e.ClientId == id).Include(e => e.Client).ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<ExportHistory>> PostExportHistory(ExportHistory exportHistory)
        {
            _context.ExportHistories.Add(exportHistory);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetExportHistories), new { id = exportHistory.Id }, exportHistory);
        }
    }
}