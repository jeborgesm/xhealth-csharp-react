using System.Threading.Tasks;

namespace ClientExportAPI.Services
{
    public interface IExportService
    {
        Task<string> ExportAccountsToFiles(int clientId);
    }
}