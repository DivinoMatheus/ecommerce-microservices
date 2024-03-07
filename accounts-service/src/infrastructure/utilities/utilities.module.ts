import { Module } from "@nestjs/common";
import { HashServiceProvider } from "./hash-service/hash-service.provider";

@Module({
    providers: [HashServiceProvider],
    exports: [HashServiceProvider]
})
export class UtilitiesModule {}