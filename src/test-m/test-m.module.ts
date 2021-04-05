import {Module} from "@nestjs/common";
import {ClientsModule} from "@nestjs/microservices";
import {grpcClientOptions} from "../grpc-client.options";

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'HERO_PACKAGE',
                ...grpcClientOptions,
            }
        ]),
    ],
})
export class TestMModule {}