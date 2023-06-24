using Grpc.Core;

namespace Api.Services;

public class CarService : CarEndpoints.CarEndpointsBase
{
    public override Task<CreateCarResponse> CreateCar(CreateCarRequest request, ServerCallContext context)
    {
        return Task.FromResult(new CreateCarResponse { Car = new()});
    }

    public override Task<GetAllResponse> GetAll(GetAllRequest request, ServerCallContext context)
    {
        return Task.FromResult(new GetAllResponse());
    }

    public override Task<GetByGuidReponse> GetByGuid(GetByGuidRequest request, ServerCallContext context)
    {
        return Task.FromResult(new GetByGuidReponse());
    }
}
