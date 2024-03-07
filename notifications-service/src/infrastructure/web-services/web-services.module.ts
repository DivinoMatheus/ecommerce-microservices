import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { AccountsProviders } from "./accounts/accounts.providers";
import { OrdersProviders } from "./orders/orders.providers";

@Module({
    imports: [HttpModule.register({
        timeout: 3000
    })],
    providers: [...AccountsProviders, ...OrdersProviders],
    exports: [...AccountsProviders, ...OrdersProviders]
})
export class WebServicesModule {}