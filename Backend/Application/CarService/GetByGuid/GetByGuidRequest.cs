using Domain;
using MediatR;

namespace Application.CarService.GetByGuid;

internal class GetByGuidRequest : IRequest<CarModel?>
{
    public Guid Guid { get; set; }
}
