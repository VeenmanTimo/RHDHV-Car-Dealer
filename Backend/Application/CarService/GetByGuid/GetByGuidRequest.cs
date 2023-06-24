using Domain;
using MediatR;

namespace Application.CarService.GetByGuid;

public class GetByGuidRequest : IRequest<CarModel?>
{
    public Guid Guid { get; set; }
}
