// package: car
// file: car.proto

var car_pb = require("./car_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CarEndpoints = (function () {
  function CarEndpoints() {}
  CarEndpoints.serviceName = "car.CarEndpoints";
  return CarEndpoints;
}());

CarEndpoints.GetAll = {
  methodName: "GetAll",
  service: CarEndpoints,
  requestStream: false,
  responseStream: false,
  requestType: car_pb.GetAllRequest,
  responseType: car_pb.GetAllResponse
};

CarEndpoints.GetByGuid = {
  methodName: "GetByGuid",
  service: CarEndpoints,
  requestStream: false,
  responseStream: false,
  requestType: car_pb.GetByGuidRequest,
  responseType: car_pb.GetByGuidReponse
};

CarEndpoints.CreateCar = {
  methodName: "CreateCar",
  service: CarEndpoints,
  requestStream: false,
  responseStream: false,
  requestType: car_pb.CreateCarRequest,
  responseType: car_pb.CreateCarResponse
};

exports.CarEndpoints = CarEndpoints;

function CarEndpointsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CarEndpointsClient.prototype.getAll = function getAll(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CarEndpoints.GetAll, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CarEndpointsClient.prototype.getByGuid = function getByGuid(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CarEndpoints.GetByGuid, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CarEndpointsClient.prototype.createCar = function createCar(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CarEndpoints.CreateCar, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.CarEndpointsClient = CarEndpointsClient;

