import { Provider } from "@nestjs/common";
import { HashServiceImpl } from "./hash-service.impl";
import { HashService } from "src/domain/services/hash.service";

export const HashServiceProvider: Provider = { 
    provide: HashService,
    useClass: HashServiceImpl
}