using Application.Repositories;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories;

internal class CarRepository : ICarRepository
{
    private readonly DatabaseContext context;

    public CarRepository(DatabaseContext context)
    {
        this.context = context;
    }

    public async Task CreateAsync(CarModel car, CancellationToken cancellationToken)
    {
        await context.Cars.AddAsync(car);
    }

    public async Task<List<CarModel>> GetAllAsync(CancellationToken cancellationToken)
    {
        return await context.Cars.ToListAsync(cancellationToken);
    }

    public async Task<CarModel?> GetByGuidAsync(Guid guid, CancellationToken cancellationToken)
    {
        return await context.Cars.FirstOrDefaultAsync(item => item.Guid == guid, cancellationToken);
    }
}
