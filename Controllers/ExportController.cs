using Microsoft.AspNetCore.Mvc;
using ClientExportAPI.Services;
using System.Threading.Tasks;

namespace ClientExportAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExportController : ControllerBase
    {
        private readonly IExportService _exportService;

        public ExportController(IExportService exportService)
        {
            _exportService = exportService;
        }

        [HttpGet("{clientId}")]
        public async Task<IActionResult> ExportClientAccounts(int clientId)
        {
            var files = await _exportService.ExportAccountsToFiles(clientId);

            if (files == null)
                return NotFound();

            var filePaths = files.Split(",");
            var zipFileName = $"export-{DateTime.UtcNow:yyyy-MM-dd}.zip";
            var zipFilePath = Path.Combine(Directory.GetCurrentDirectory(), "Exports", zipFileName);

            using (var zip = new System.IO.Compression.ZipArchive(new FileStream(zipFilePath, FileMode.Create), System.IO.Compression.ZipArchiveMode.Create))
            {
                foreach (var filePath in filePaths)
                {
                    var fileBytes = await System.IO.File.ReadAllBytesAsync(filePath);
                    var entry = zip.CreateEntry(Path.GetFileName(filePath));
                    using (var entryStream = entry.Open())
                    using (var fileStream = new MemoryStream(fileBytes))
                    {
                        fileStream.CopyTo(entryStream);
                    }
                }
            }

            var zipBytes = await System.IO.File.ReadAllBytesAsync(zipFilePath);
            return File(zipBytes, "application/zip", zipFileName);
        }
    }
}