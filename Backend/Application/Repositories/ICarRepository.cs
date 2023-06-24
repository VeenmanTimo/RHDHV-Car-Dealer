using Domain;

namespace Application.Repositories;

public interface ICarRepository
{
    Task<List<CarModel>> GetAllAsync(CancellationToken cancellationToken);
    Task<CarModel?> GetByGuidAsync(Guid guid, CancellationToken cancellationToken);
    Task CreateAsync(CarModel car, CancellationToken cancellationToken);
}
