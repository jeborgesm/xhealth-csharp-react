namespace XHealthWeb.Models
{
    public class Account
    {
        public int Id { get; set; }
        public int ClientId { get; set; }
        public string AccountNumber { get; set; }
        public decimal Balance { get; set; }
        public int FacilityId { get; set; }
        public DateTime AdmitDate { get; set; }
        public DateTime? DischargeDate { get; set; }
        public int PatientId { get; set; }
        public Client Client { get; set; }
        public Facility Facility { get; set; }
        public Patient Patient { get; set; }
        public List<AccountInsurance> AccountInsurances { get; set; }
    }
}