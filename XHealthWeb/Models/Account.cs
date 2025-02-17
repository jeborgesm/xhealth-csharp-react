namespace XHealthWeb.Models
{
    public class Account
    {
        public int Id { get; set; }
        public int ClientId { get; set; }
        public required string AccountNumber { get; set; }
        public decimal Balance { get; set; }
        public int FacilityId { get; set; }
        public DateTime AdmitDate { get; set; }
        public DateTime? DischargeDate { get; set; }
        public int PatientId { get; set; }
        public required Client Client { get; set; }
        public required Facility Facility { get; set; }
        public required Patient Patient { get; set; }
        public required List<AccountInsurance> AccountInsurances { get; set; }
    }
}