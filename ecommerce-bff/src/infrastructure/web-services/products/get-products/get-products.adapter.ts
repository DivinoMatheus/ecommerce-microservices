import { HttpService } from "@nestjs/axios";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { AxiosError } from "axios";
import { firstValueFrom, map } from "rxjs";
import { Product } from "src/domain/entities/product";
import { GetProductsPort } from "src/domain/ports/products/get-products.port";

@Injectable()
export class GetProductsAdapter implements GetProductsPort {
    constructor(private readonly httpService: HttpService) {}
    
    public getById(productId: string): Promise<Product> {
        return firstValueFrom(
            this.httpService.get<Product>(`${process.env.PRODUCTS_SERVICE_URL}/products/${productId}`
        ).pipe(map(({ data }) => data )))
        .catch((error: AxiosError) => {
            if (error.response?.status === HttpStatus.NOT_FOUND) {
                throw new HttpException(`Product not found ${productId}`, HttpStatus.NOT_FOUND)
            }

            throw error
        })
    } 
}