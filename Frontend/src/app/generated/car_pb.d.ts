// package: car
// file: Backend/Api/Protos/car.proto

import * as jspb from "google-protobuf";

export class Car extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): void;

  getModel(): string;
  setModel(value: string): void;

  getMake(): string;
  setMake(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getYearOfRelease(): number;
  setYearOfRelease(value: number): void;

  getPrice(): number;
  setPrice(value: number): void;

  getFuelComsumption(): number;
  setFuelComsumption(value: number): void;

  getAnnualMaintenanceCost(): number;
  setAnnualMaintenanceCost(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Car.AsObject;
  static toObject(includeInstance: boolean, msg: Car): Car.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Car, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Car;
  static deserializeBinaryFromReader(message: Car, reader: jspb.BinaryReader): Car;
}

export namespace Car {
  export type AsObject = {
    guid: string,
    model: string,
    make: string,
    version: string,
    yearOfRelease: number,
    price: number,
    fuelComsumption: number,
    annualMaintenanceCost: number,
  }
}

export class GetAllRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllRequest): GetAllRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllRequest;
  static deserializeBinaryFromReader(message: GetAllRequest, reader: jspb.BinaryReader): GetAllRequest;
}

export namespace GetAllRequest {
  export type AsObject = {
  }
}

export class GetAllResponse extends jspb.Message {
  clearCarsList(): void;
  getCarsList(): Array<Car>;
  setCarsList(value: Array<Car>): void;
  addCars(value?: Car, index?: number): Car;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllResponse): GetAllResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllResponse;
  static deserializeBinaryFromReader(message: GetAllResponse, reader: jspb.BinaryReader): GetAllResponse;
}

export namespace GetAllResponse {
  export type AsObject = {
    carsList: Array<Car.AsObject>,
  }
}

export class GetByGuidRequest extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetByGuidRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetByGuidRequest): GetByGuidRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetByGuidRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetByGuidRequest;
  static deserializeBinaryFromReader(message: GetByGuidRequest, reader: jspb.BinaryReader): GetByGuidRequest;
}

export namespace GetByGuidRequest {
  export type AsObject = {
    guid: string,
  }
}

export class GetByGuidReponse extends jspb.Message {
  hasCar(): boolean;
  clearCar(): void;
  getCar(): Car | undefined;
  setCar(value?: Car): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetByGuidReponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetByGuidReponse): GetByGuidReponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetByGuidReponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetByGuidReponse;
  static deserializeBinaryFromReader(message: GetByGuidReponse, reader: jspb.BinaryReader): GetByGuidReponse;
}

export namespace GetByGuidReponse {
  export type AsObject = {
    car?: Car.AsObject,
  }
}

export class CreateCarRequest extends jspb.Message {
  getModel(): string;
  setModel(value: string): void;

  getMake(): string;
  setMake(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getYearOfRelease(): number;
  setYearOfRelease(value: number): void;

  getPrice(): number;
  setPrice(value: number): void;

  getFuelComsumption(): number;
  setFuelComsumption(value: number): void;

  getAnnualMaintenanceCost(): number;
  setAnnualMaintenanceCost(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCarRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCarRequest): CreateCarRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCarRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCarRequest;
  static deserializeBinaryFromReader(message: CreateCarRequest, reader: jspb.BinaryReader): CreateCarRequest;
}

export namespace CreateCarRequest {
  export type AsObject = {
    model: string,
    make: string,
    version: string,
    yearOfRelease: number,
    price: number,
    fuelComsumption: number,
    annualMaintenanceCost: number,
  }
}

export class CreateCarResponse extends jspb.Message {
  hasCar(): boolean;
  clearCar(): void;
  getCar(): Car | undefined;
  setCar(value?: Car): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCarResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCarResponse): CreateCarResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCarResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCarResponse;
  static deserializeBinaryFromReader(message: CreateCarResponse, reader: jspb.BinaryReader): CreateCarResponse;
}

export namespace CreateCarResponse {
  export type AsObject = {
    car?: Car.AsObject,
  }
}

