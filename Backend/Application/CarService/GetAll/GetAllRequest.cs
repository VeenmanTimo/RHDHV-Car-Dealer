using Domain;
using MediatR;

namespace Application.CarService.GetAll;

internal class GetAllRequest : IRequest<List<CarModel>>
{
}
