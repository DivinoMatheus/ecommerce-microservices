import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom, map } from "rxjs";
import { Cart } from "src/domain/entities/cart";
import { GetCartPort } from "src/domain/ports/carts/get-cart.port";

@Injectable()
export class GetCartAdapter implements GetCartPort {
    constructor(private readonly httpService: HttpService) {}

    public getByOwner(owner: string): Promise<Cart> {
        return firstValueFrom(this.httpService.get<Cart>(`${process.env.CARTS_SERVICE_URL}/carts`, {
            headers: { 'x-account-id': owner }
        }).pipe(map(({ data }) => data)))
    }
}