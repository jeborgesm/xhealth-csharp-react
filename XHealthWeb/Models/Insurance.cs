using System.Collections.Generic;

namespace XHealthWeb.Models
{
    public class Insurance
    {
        public int Id { get; set; }
        public required string PlanName { get; set; }
        public required string Policy { get; set; }
        public required string GroupNumber { get; set; }
        public required ICollection<AccountInsurance> AccountInsurances { get; set; }
    }
}
