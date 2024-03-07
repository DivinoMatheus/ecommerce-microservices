import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom, map } from "rxjs";
import { Product } from "src/domain/entities/product";
import { CreateOrderPort } from "src/domain/ports/orders/create-order.port";

@Injectable()
export class CreateOrderAdapter implements CreateOrderPort { 
    constructor(private readonly httpService: HttpService) {}
    
    create(accountId: string, products: Array<Product>): Promise<string> {
        return firstValueFrom(
            this.httpService.post(`${process.env.ORDERS_SERVICE_URL}/orders`, {
                products
            }, { headers: { 'x-account-id': accountId } })
            .pipe(map(({ data }) => data.id))
        )
    }
}