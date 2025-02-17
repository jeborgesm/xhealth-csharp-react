namespace ClientExportAPI.Models
{
    public class Client
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Account> Accounts { get; set; }
    }
}