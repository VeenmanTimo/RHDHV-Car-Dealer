using Application.Repositories;
using Domain;
using MediatR;

namespace Application.CarService.GetByGuid;

internal class GetByGuidHandler : IRequestHandler<GetByGuidRequest, CarModel?>
{
    private readonly ICarRepository carRepository;

    public GetByGuidHandler(ICarRepository carRepository)
    {
        this.carRepository = carRepository;
    }

    public async Task<CarModel?> Handle(GetByGuidRequest request, CancellationToken cancellationToken)
    {
        var result = await carRepository.GetByGuidAsync(request.Guid, cancellationToken);
        if (result == null)
            throw new Exception("Car not found");

        return result;
    }
}
