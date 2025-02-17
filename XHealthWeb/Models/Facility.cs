namespace XHealthWeb.Models
{
    public class Facility
    {
        public int Id { get; set; }
        public required string FacilityName { get; set; }
        public required string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; } = string.Empty;
        public required string City { get; set; }
        public required string State { get; set; }
        public required string Zip { get; set; }
    }
}