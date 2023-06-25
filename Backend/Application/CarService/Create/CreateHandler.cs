using Application.Repositories;
using Domain;
using Grpc.Core;
using MediatR;

namespace Application.CarService.Create;

public class CreateHandler : IRequestHandler<CreateRequest, CarModel>
{
    private readonly ICarRepository carRepository;
    private readonly IUnitOfWork unitOfWork;

    public CreateHandler(ICarRepository carRepository, IUnitOfWork unitOfWork)
    {
        this.carRepository = carRepository;
        this.unitOfWork = unitOfWork;
    }

    public async Task<CarModel> Handle(CreateRequest request, CancellationToken cancellationToken)
    {
        const int minimalYear = 1884;

        if (string.IsNullOrWhiteSpace(request.Model))
            throw new RpcException(new Status(StatusCode.InvalidArgument, "Model cannot be empty"));
        if (string.IsNullOrWhiteSpace(request.Make))
            throw new RpcException(new Status(StatusCode.InvalidArgument, "Make cannot be empty"));
        if (string.IsNullOrWhiteSpace(request.Version))
            throw new RpcException(new Status(StatusCode.InvalidArgument, "Version cannot be empty"));
        if (request.YearOfRelease <= minimalYear)
            throw new RpcException(new Status(StatusCode.InvalidArgument, $"Year must be after {minimalYear}"));
        if (request.Price <= 0)
            throw new RpcException(new Status(StatusCode.InvalidArgument, $"Price cannot be negative or zero"));
        if (request.FuelConsumption <= 0)
            throw new RpcException(new Status(StatusCode.InvalidArgument, $"Fuel consumption cannot be negative or zero"));
        if (request.AnnualMaintenanceCost <= 0)
            throw new RpcException(new Status(StatusCode.InvalidArgument, $"Annual maintenance cost cannot be negative or zero"));

        var car = new CarModel
        {
            Model = request.Model,
            Make = request.Make,
            Version = request.Version,
            YearOfRelease = request.YearOfRelease,
            Price = request.Price,
            FuelConsumption = request.FuelConsumption,
            AnnualMaintenanceCost = request.AnnualMaintenanceCost,
        };

        await carRepository.CreateAsync(car, cancellationToken);
        await unitOfWork.SaveAsync(cancellationToken);

        return car;
    }
}
