using Domain;
using MediatR;

namespace Application.CarService.GetAll;

public class GetAllRequest : IRequest<List<CarModel>>
{
}
