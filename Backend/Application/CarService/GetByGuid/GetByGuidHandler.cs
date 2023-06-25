using Application.Repositories;
using Domain;
using Grpc.Core;
using MediatR;

namespace Application.CarService.GetByGuid;

public class GetByGuidHandler : IRequestHandler<GetByGuidRequest, CarModel?>
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
            throw new RpcException(new Status(StatusCode.NotFound, "Entity cannot be found"));

        return result;
    }
}
