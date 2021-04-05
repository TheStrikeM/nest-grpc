import {ClientOptions, Transport} from "@nestjs/microservices";
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        url: '0.0.0.0:10000',
        package: 'test',
        protoPath: join(__dirname, './protos/test.proto')
    }
}