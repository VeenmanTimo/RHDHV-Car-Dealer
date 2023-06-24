using Application.Repositories;
using Domain;
using MediatR;

namespace Application.CarService.Create;

internal class CreateHandler : IRequestHandler<CreateRequest, CarModel>
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
