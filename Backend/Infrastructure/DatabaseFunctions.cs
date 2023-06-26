using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure;

public static class DatabaseFunctions
{
    public static void ApplyMigrations(IServiceScope serviceScope)
    {
        var dbContext = serviceScope.ServiceProvider.GetRequiredService<DatabaseContext>();

        dbContext.Database.Migrate();
    }

    public static void AddDefaultData(IServiceScope serviceScope)
    {
        var dbContext = serviceScope.ServiceProvider.GetRequiredService<DatabaseContext>();

        if (dbContext.Cars.Count() != 0)
            return;

        dbContext.Cars.AddRange(new List<CarModel>
        {
            new CarModel
            {
                Guid = Guid.NewGuid(),
                Model = "Fiesta",
                Make = "Ford",
                Version = "SE",
                YearOfRelease = 2020,
                Price = 20000,
                FuelConsumption = 6.8,
                AnnualMaintenanceCost = 450
            },
            new CarModel
            {
                Guid = Guid.NewGuid(),
                Model = "Cruze",
                Make = "Chevrolet",
                Version = "LT",
                YearOfRelease = 2021,
                Price = 22000,
                FuelConsumption = 7.2,
                AnnualMaintenanceCost = 480
            },
            new CarModel
            {
                Guid = Guid.NewGuid(),
                Model = "Golf",
                Make = "Volkswagen",
                Version = "Trendline",
                YearOfRelease = 2022,
                Price = 28000,
                FuelConsumption = 6.5,
                AnnualMaintenanceCost = 550
            },
            new CarModel
            {
                Guid = Guid.NewGuid(),
                Model = "Corolla",
                Make = "Toyota",
                Version = "SE",
                YearOfRelease = 2021,
                Price = 25000,
                FuelConsumption = 7.0,
                AnnualMaintenanceCost = 500
            },
            new CarModel
            {
                Guid = Guid.NewGuid(),
                Model = "Civic",
                Make = "Honda",
                Version = "Touring",
                YearOfRelease = 2022,
                Price = 30000,
                FuelConsumption = 7.8,
                AnnualMaintenanceCost = 550
            },
            new CarModel
            {
                Guid = Guid.NewGuid(),
                Model = "3 Series",
                Make = "BMW",
                Version = "330i",
                YearOfRelease = 2021,
                Price = 40000,
                FuelConsumption = 8.5,
                AnnualMaintenanceCost = 600
            },
            new CarModel
            {
                Guid = Guid.NewGuid(),
                Model = "C-Class",
                Make = "Mercedes-Benz",
                Version = "C300",
                YearOfRelease = 2022,
                Price = 45000,
                FuelConsumption = 9.0,
                AnnualMaintenanceCost = 650
            },
            new CarModel
            {
                Guid = Guid.NewGuid(),
                Model = "Impreza",
                Make = "Subaru",
                Version = "Premium",
                YearOfRelease = 2021,
                Price = 23000,
                FuelConsumption = 7.2,
                AnnualMaintenanceCost = 520
            },
            new CarModel
            {
                Guid = Guid.NewGuid(),
                Model = "Sentra",
                Make = "Nissan",
                Version = "SV",
                YearOfRelease = 2022,
                Price = 22000,
                FuelConsumption = 7.5,
                AnnualMaintenanceCost = 490
            },
            new CarModel
            {
                Guid = Guid.NewGuid(),
                Model = "Optima",
                Make = "Kia",
                Version = "EX",
                YearOfRelease = 2021,
                Price = 25000,
                FuelConsumption = 7.3,
                AnnualMaintenanceCost = 530
            }
        });

        dbContext.SaveChanges();
    }
}
