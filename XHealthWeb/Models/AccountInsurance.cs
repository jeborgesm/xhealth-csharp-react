namespace XHealthWeb.Models
{
    public class AccountInsurance
    {
        public int AccountId { get; set; }
        public Account Account { get; set; }
        public int InsuranceId { get; set; }
        public Insurance Insurance { get; set; }
    }
}