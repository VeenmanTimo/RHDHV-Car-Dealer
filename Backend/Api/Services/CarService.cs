using Grpc.Core;
using MediatR;

namespace Api.Services;

public class CarService : CarEndpoints.CarEndpointsBase
{
    public CarService(IMediator mediator)
    {
        this.mediator = mediator;
    }

    private readonly IMediator mediator;

    public override async Task<CreateCarResponse> CreateCar(CreateCarRequest car, ServerCallContext context)
    {
        var result = await mediator.Send(new Application.CarService.Create.CreateRequest
        {
            Model = car.Model,
            Make = car.Make,
            Version = car.Version,
            YearOfRelease = car.YearOfRelease,
            Price = car.Price,
            FuelConsumption = car.FuelComsumption,
            AnnualMaintenanceCost = car.AnnualMaintenanceCost
        });

        return new CreateCarResponse { Car = result.ToResponseCar() };
    }

    public override async Task<GetAllResponse> GetAll(GetAllRequest request, ServerCallContext context)
    {
        var result = await mediator.Send(new Application.CarService.GetAll.GetAllRequest());

        var response = new GetAllResponse();
        response.Cars.AddRange(result.Select(item => item.ToResponseCar()));
        return response;
    }

    public override async Task<GetByGuidReponse> GetByGuid(GetByGuidRequest request, ServerCallContext context)
    {
        if (!Guid.TryParse(request.Guid, out var guid))
        {
            return new GetByGuidReponse();
        }

        var result = await mediator.Send(new Application.CarService.GetByGuid.GetByGuidRequest { Guid = guid });

        if (result == null)
        {
            return new GetByGuidReponse();
        }

        return new GetByGuidReponse { Car = result.ToResponseCar() };
    }
}
