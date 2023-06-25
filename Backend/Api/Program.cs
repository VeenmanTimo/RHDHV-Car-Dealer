using Api.Services;
using Application;
using Infrastructure;

var builder = WebApplication.CreateBuilder(args);

// Additional configuration is required to successfully run gRPC on macOS.
// For instructions on how to configure Kestrel and gRPC clients on macOS, visit https://go.microsoft.com/fwlink/?linkid=2099682

// Add services to the container.
builder.Services.AddGrpc();

builder.Services.ConfigureApplication();
builder.Services.ConfigureInfrastructure(builder.Configuration);

#if DEBUG
var allowLocalhost = "_allowLocalhost";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: allowLocalhost,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:4200", "https://localhost:4200");
                          policy.AllowCredentials();
                          policy.AllowAnyHeader();
                          policy.AllowAnyMethod();
                          // Required for correct error messages on the frontend
                          policy.WithExposedHeaders("Grpc-Status", "Grpc-Message", "Grpc-Encoding", "Grpc-Accept-Encoding", "x-grpc-test-echo-initial", "x-grpc-test-echo-trailing-bin");
                      });
});
#endif

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseGrpcWeb();
app.MapGrpcService<CarService>().EnableGrpcWeb();
app.MapGet("/", () => "Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");

#if DEBUG
app.UseCors(allowLocalhost);
app.UseHttpsRedirection();
#endif

app.Run();
