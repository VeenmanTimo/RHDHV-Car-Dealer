using Application.CarService.Create;
using Application.Repositories;
using Domain;
using NSubstitute;
using Xunit;

namespace Application.Tests.Unit.CarService;

public class CreateHandlerTests
{
    private readonly ICarRepository carRepository = Substitute.For<ICarRepository>();
    private readonly IUnitOfWork unitOfWork = Substitute.For<IUnitOfWork>();
    private readonly CreateHandler sut;

    public CreateHandlerTests()
    {
        sut = new(carRepository, unitOfWork);
    }

    [Fact]
    public async void Handle_ShouldCreateEntry_WhenRequestIsValid()
    {
        var request = new CreateRequest()
        {
            Model = "Model",
            Make = "Make",
            Version = "Version",
            Price = 999,
            YearOfRelease = 2000,
            FuelConsumption = 10,
            AnnualMaintenanceCost = 100
        };

        await sut.Handle(request, CancellationToken.None);

        await carRepository.Received(1).CreateAsync(Arg.Any<CarModel>(), Arg.Any<CancellationToken>());
        await unitOfWork.Received(1).SaveAsync(Arg.Any<CancellationToken>());
    }
}
