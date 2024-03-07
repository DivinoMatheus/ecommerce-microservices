import { Module } from "@nestjs/common";
import { AccountProviders } from "./accounts/accounts.providers";
import { HttpModule } from "@nestjs/axios";
import { ProductsProviders } from "./products/products.providers";
import { CartsProviders } from "./carts/carts.providers";
import { OrdersProviders } from "./orders/orders.providers";

@Module({
    imports: [
        HttpModule.register({ 
            timeout: 3000
        })
    ],
    providers: [...AccountProviders, ...ProductsProviders, ...CartsProviders, ...OrdersProviders],
    exports: [...AccountProviders, ...ProductsProviders, ...CartsProviders, ...OrdersProviders]
})
export class WebServicesModule {}