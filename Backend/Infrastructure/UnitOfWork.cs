using Application;

namespace Infrastructure;

internal class UnitOfWork : IUnitOfWork
{
    private readonly DatabaseContext context;

    public UnitOfWork(DatabaseContext context)
    {
        this.context = context;
    }

    public async Task SaveAsync(CancellationToken cancellationToken)
    {
        await context.SaveChangesAsync(cancellationToken);
    }
}
