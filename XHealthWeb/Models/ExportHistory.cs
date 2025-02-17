namespace XHealthWeb.Models
{
    public class ExportHistory
    {
        public int Id { get; set; }
        public int ClientId { get; set; }
        public int NumberOfAccounts { get; set; }
        public decimal TotalBalance { get; set; }
        public DateTime ExportDate { get; set; }
        public required Client Client { get; set; }
    }
}