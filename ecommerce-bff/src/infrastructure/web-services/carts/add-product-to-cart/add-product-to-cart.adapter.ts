import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom, map } from "rxjs";
import { Cart } from "src/domain/entities/cart";
import { AddProductToCartPort } from "src/domain/ports/carts/add-product-to-cart.port";

@Injectable()
export class AddProductToCartAdapter implements AddProductToCartPort { 
    constructor(private readonly httpService: HttpService) {}
    
    public add(accountId: string, productId: string): Promise<Cart> {
        return firstValueFrom(
            this.httpService.post<Cart>(`${process.env.CARTS_SERVICE_URL}/carts/add-product`, {
                productId
            }, { headers: { 'x-account-id': accountId } }).pipe(map(({ data }) => data))
        )
    }
}