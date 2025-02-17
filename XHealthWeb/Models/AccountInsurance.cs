namespace XHealthWeb.Models
{
    public class AccountInsurance
    {
        public int AccountId { get; set; }
        public required Account Account { get; set; }
        public int InsuranceId { get; set; }
        public required Insurance Insurance { get; set; }
    }
}