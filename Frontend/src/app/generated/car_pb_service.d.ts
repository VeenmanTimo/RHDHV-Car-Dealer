// package: car
// file: Backend/Api/Protos/car.proto

import * as Backend_Api_Protos_car_pb from "./car_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CarEndpointsGetAll = {
  readonly methodName: string;
  readonly service: typeof CarEndpoints;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof Backend_Api_Protos_car_pb.GetAllRequest;
  readonly responseType: typeof Backend_Api_Protos_car_pb.GetAllResponse;
};

type CarEndpointsGetByGuid = {
  readonly methodName: string;
  readonly service: typeof CarEndpoints;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof Backend_Api_Protos_car_pb.GetByGuidRequest;
  readonly responseType: typeof Backend_Api_Protos_car_pb.GetByGuidReponse;
};

type CarEndpointsCreateCar = {
  readonly methodName: string;
  readonly service: typeof CarEndpoints;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof Backend_Api_Protos_car_pb.CreateCarRequest;
  readonly responseType: typeof Backend_Api_Protos_car_pb.CreateCarResponse;
};

export class CarEndpoints {
  static readonly serviceName: string;
  static readonly GetAll: CarEndpointsGetAll;
  static readonly GetByGuid: CarEndpointsGetByGuid;
  static readonly CreateCar: CarEndpointsCreateCar;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class CarEndpointsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAll(
    requestMessage: Backend_Api_Protos_car_pb.GetAllRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: Backend_Api_Protos_car_pb.GetAllResponse|null) => void
  ): UnaryResponse;
  getAll(
    requestMessage: Backend_Api_Protos_car_pb.GetAllRequest,
    callback: (error: ServiceError|null, responseMessage: Backend_Api_Protos_car_pb.GetAllResponse|null) => void
  ): UnaryResponse;
  getByGuid(
    requestMessage: Backend_Api_Protos_car_pb.GetByGuidRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: Backend_Api_Protos_car_pb.GetByGuidReponse|null) => void
  ): UnaryResponse;
  getByGuid(
    requestMessage: Backend_Api_Protos_car_pb.GetByGuidRequest,
    callback: (error: ServiceError|null, responseMessage: Backend_Api_Protos_car_pb.GetByGuidReponse|null) => void
  ): UnaryResponse;
  createCar(
    requestMessage: Backend_Api_Protos_car_pb.CreateCarRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: Backend_Api_Protos_car_pb.CreateCarResponse|null) => void
  ): UnaryResponse;
  createCar(
    requestMessage: Backend_Api_Protos_car_pb.CreateCarRequest,
    callback: (error: ServiceError|null, responseMessage: Backend_Api_Protos_car_pb.CreateCarResponse|null) => void
  ): UnaryResponse;
}

