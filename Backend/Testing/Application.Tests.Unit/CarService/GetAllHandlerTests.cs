using Application.CarService.GetAll;
using Application.CarService.GetByGuid;
using Application.Repositories;
using Domain;
using FluentAssertions;
using NSubstitute;
using Xunit;

namespace Application.Tests.Unit.CarService;

public class GetAllHandlerTests
{
    private readonly ICarRepository carRepository = Substitute.For<ICarRepository>();
    private readonly GetAllHandler sut;

    private readonly CarModel Car = new()
    {
        Guid = Guid.NewGuid(),
        Model = "Model",
        Make = "Make",
        Version = "Version",
        Price = 999,
        YearOfRelease = 2000,
        FuelConsumption = 10,
        AnnualMaintenanceCost = 100
    };

    public GetAllHandlerTests()
    {
        sut = new(carRepository);
    }

    [Fact]
    public async void Handle_ShouldReturnList_WhenItemsExist()
    {
        var request = new GetAllRequest();

        carRepository.GetAllAsync(Arg.Any<CancellationToken>()).Returns(new List<CarModel> { Car });

        var result = await sut.Handle(request, CancellationToken.None);

        await carRepository.Received(1).GetAllAsync(Arg.Any<CancellationToken>());
        result.Should().Contain(Car);
    }
}
