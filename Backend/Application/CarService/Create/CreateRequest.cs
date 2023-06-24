using Domain;
using MediatR;

namespace Application.CarService.Create;

internal class CreateRequest : IRequest<CarModel>
{
    public required string Model { get; set; }
    public required string Make { get; set; }
    public required string Version { get; set; }
    public required int YearOfRelease { get; set; }
    public required int Price { get; set; }
    public required double FuelConsumption { get; set; }
    public required double AnnualMaintenanceCost { get; set; }
}
