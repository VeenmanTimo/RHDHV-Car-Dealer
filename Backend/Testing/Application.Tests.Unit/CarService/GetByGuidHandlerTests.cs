using Application.CarService.GetByGuid;
using Application.Repositories;
using Domain;
using FluentAssertions;
using Grpc.Core;
using NSubstitute;
using NSubstitute.ReturnsExtensions;
using Xunit;

namespace Application.Tests.Unit.CarService;

public class GetByGuidHandlerTests
{
    private readonly ICarRepository carRepository = Substitute.For<ICarRepository>();
    private readonly GetByGuidHandler sut;

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

    public GetByGuidHandlerTests()
    {
        sut = new(carRepository);
    }
    [Fact]
    public async void Handle_ShouldThrowException_WhenEntryDoesntExist()
    {
        var request = new GetByGuidRequest
        {
            Guid = Guid.NewGuid()
        };

        carRepository.GetByGuidAsync(request.Guid, Arg.Any<CancellationToken>()).ReturnsNull();

        var act = async () => await sut.Handle(request, CancellationToken.None);

        await act.Should().ThrowAsync<RpcException>();
    }

    [Fact]
    public async void Handle_ShouldReturnEntry_WhenEntryExists()
    {
        var request = new GetByGuidRequest
        {
            Guid = Car.Guid
        };

        carRepository.GetByGuidAsync(Car.Guid, Arg.Any<CancellationToken>()).Returns(Car);

        var result = await sut.Handle(request, CancellationToken.None);

        await carRepository.Received(1).GetByGuidAsync(Car.Guid, Arg.Any<CancellationToken>());
        result.Should().Be(Car);
    }
}
