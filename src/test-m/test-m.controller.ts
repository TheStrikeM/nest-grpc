import {Controller, Inject, OnModuleInit} from "@nestjs/common";
import {Observable} from "rxjs";
import {ClientGrpc, GrpcMethod} from "@nestjs/microservices";

interface TestServiceProps {
    id: number
}

interface TestServiceResult {
    id: number,
    name: string
}

interface TestService {
    findOne(data: TestServiceProps): Observable<TestServiceResult> 
}

@Controller()
export class TestMController implements OnModuleInit {
    private testService: TestService
    private readonly items: TestServiceResult[] = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Doe' },
        { id: 3, name: 'Billy' },
        { id: 4, name: 'Joey' },
    ]

    constructor(@Inject('HERO_PACKAGE') private readonly client: ClientGrpc) {}

    onModuleInit(): any {
        this.testService = this.client.getService<TestService>('TestService')
    }

    @GrpcMethod('TestService')
    findOne(data: TestServiceProps): TestServiceResult {
        return this.items.find(({id}) => id === data.id)
    }
}