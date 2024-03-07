import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom, map } from "rxjs";
import { Order } from "src/domain/entities/order";
import { GetOrdersPort } from "src/domain/ports/get-orders.port";

@Injectable()
export class GetOrdersAdapter implements GetOrdersPort { 
    constructor(private readonly httpService: HttpService) {}

    public findById(orderId: string): Promise<Order> {
        return firstValueFrom(
            this.httpService.get<Order>(`${process.env.ORDERS_SERVICE_URL}/orders/${orderId}`)
            .pipe(map(({ data }) => data))
        )
    }
}