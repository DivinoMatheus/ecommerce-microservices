import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom, map } from "rxjs";
import { Cart } from "src/domain/entities/cart";
import { RemoveProductsFromCartPort } from "src/domain/ports/carts/remove-products-from-cart.port";

@Injectable()
export class RemoveProductsFromCartAdapter implements RemoveProductsFromCartPort { 
    constructor(private readonly httpService: HttpService) {}
    
    public remove(accountId: string, productIds: Array<string>): Promise<Cart> {
        return firstValueFrom(
            this.httpService.post<Cart>(`${process.env.CARTS_SERVICE_URL}/carts/remove-products`, {
                products: productIds
            }, { headers: { 'x-account-id': accountId } }).pipe(map(({ data }) => data))
        )
    }
}