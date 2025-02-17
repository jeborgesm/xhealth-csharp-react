using System.Collections.Generic;

namespace XHealthWeb.Models
{
    public class Insurance
    {
        public int Id { get; set; }
        public string PlanName { get; set; }
        public string Policy { get; set; }
        public string GroupNumber { get; set; }

        // Add this property
        public ICollection<AccountInsurance> AccountInsurances { get; set; }
    }
}
