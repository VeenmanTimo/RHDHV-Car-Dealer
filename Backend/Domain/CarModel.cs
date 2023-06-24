using System.ComponentModel.DataAnnotations;

namespace Domain;

public class CarModel
{
    [Key]
    public Guid Guid { get; set; }
    public required string Model { get; set; }
    public required string Make { get; set; }
    public required string Version { get; set; }
    public required int YearOfRelease { get; set; }
    public required int Price { get; set; }
    public required double FuelConsumption { get; set; }
    public required double AnnualMaintenanceCost { get; set; }
}
