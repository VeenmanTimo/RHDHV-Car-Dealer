namespace Application;

public interface IUnitOfWork
{
    Task SaveAsync(CancellationToken cancellationToken);
}
