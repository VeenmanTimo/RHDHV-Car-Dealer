using Application.Repositories;
using Domain;
using MediatR;

namespace Application.CarService.GetAll;

internal class GetAllHandler : IRequestHandler<GetAllRequest, List<CarModel>>
{
    private readonly ICarRepository carRepository;

    public GetAllHandler(ICarRepository carRepository)
    {
        this.carRepository = carRepository;
    }

    public async Task<List<CarModel>> Handle(GetAllRequest request, CancellationToken cancellationToken)
    {
        return await carRepository.GetAllAsync(cancellationToken);
    }
}
