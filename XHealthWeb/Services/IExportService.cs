using System.Threading.Tasks;

namespace XHealthWeb.Services
{
    public interface IExportService
    {
        Task<string> ExportAccountsToFiles(int clientId);
    }
}