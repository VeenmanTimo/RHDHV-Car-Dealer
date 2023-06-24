using Domain;

namespace Api;

public static class MapperExtensions
{
    public static Car ToResponseCar(this CarModel model)
    {
        return new Car
        {
            Guid = model.Guid.ToString(),
            Model = model.Model,
            Make = model.Make,
            Version = model.Version,
            YearOfRelease = model.YearOfRelease,
            Price = model.Price,
            FuelComsumption = model.FuelConsumption,
            AnnualMaintenanceCost = model.AnnualMaintenanceCost,
        };
    }
}
