using Application.CarService.Create;
using Application.Repositories;
using Domain;
using FluentAssertions;
using Grpc.Core;
using NSubstitute;
using Xunit;

namespace Application.Tests.Unit.CarService
{
    public class CreateHandlerTests
    {
        private readonly ICarRepository carRepository = Substitute.For<ICarRepository>();
        private readonly IUnitOfWork unitOfWork = Substitute.For<IUnitOfWork>();
        private readonly CreateHandler sut;

        public CreateHandlerTests()
        {
            sut = new CreateHandler(carRepository, unitOfWork);
        }

        public static IEnumerable<object[]> ValidationData => new List<object[]>()
        {
            new object[]
            {
                new CreateRequest
                {
                    Model = string.Empty,
                    Make = "Honda",
                    Version = "EX",
                    YearOfRelease = 2021,
                    Price = 25000,
                    FuelConsumption = 7.5,
                    AnnualMaintenanceCost = 500
                }
            },
            new object[]
            {
                new CreateRequest
                {
                    Model = "Civic",
                    Make = string.Empty,
                    Version = "EX",
                    YearOfRelease = 2021,
                    Price = 25000,
                    FuelConsumption = 7.5,
                    AnnualMaintenanceCost = 500
                }
            },
            new object[]
            {
                new CreateRequest
                {
                    Model = "Civic",
                    Make = "Honda",
                    Version = string.Empty,
                    YearOfRelease = 2021,
                    Price = 25000,
                    FuelConsumption = 7.5,
                    AnnualMaintenanceCost = 500
                }
            },
            new object[]
            {
                new CreateRequest
                {
                    Model = "Civic",
                    Make = "Honda",
                    Version = "EX",
                    YearOfRelease = 1800,
                    Price = 25000,
                    FuelConsumption = 7.5,
                    AnnualMaintenanceCost = 500
                }
            },
            new object[]
            {
                new CreateRequest
                {
                    Model = "Civic",
                    Make = "Honda",
                    Version = "EX",
                    YearOfRelease = 2021,
                    Price = 0,
                    FuelConsumption = 7.5,
                    AnnualMaintenanceCost = 500
                }
            },
            new object[]
            {
                new CreateRequest
                {
                    Model = "Civic",
                    Make = "Honda",
                    Version = "EX",
                    YearOfRelease = 2021,
                    Price = 25000,
                    FuelConsumption = -5,
                    AnnualMaintenanceCost = 500
                }
            },
            new object[]
            {
                new CreateRequest
                {
                    Model = "Civic",
                    Make = "Honda",
                    Version = "EX",
                    YearOfRelease = 2021,
                    Price = 25000,
                    FuelConsumption = 7.5,
                    AnnualMaintenanceCost = 0
                }
            }
        };

        [Theory]
        [MemberData(nameof(ValidationData))]
        public async void Handle_ShouldThrowException_WhenValidationFails(CreateRequest request)
        {
            var act = async () => await sut.Handle(request, CancellationToken.None);

            await act.Should().ThrowAsync<RpcException>();
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
}
