import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { PaymentsProvider } from "./services/payments-service/payments.provider";

@Module({
    imports: [
        HttpModule.register({
            baseURL: process.env.PAYMENTS_SERVICE_URL,
            timeout: 3000
        })
    ],
    providers: [PaymentsProvider],
    exports: [PaymentsProvider]
})
export class WebServicesModule {}