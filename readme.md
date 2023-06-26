To create the frontend proto output run

protoc --plugin=protoc-gen-ts="Frontend\node_modules\.bin\protoc-gen-ts.cmd" --js_out="import_style=commonjs,binary:Frontend\src\app\generated" --ts_out="service=grpc-web:Frontend\src\app\generated" --proto_path="Backend\Api\Protos" car.proto