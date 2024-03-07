import { CreateOrderPort } from "src/domain/ports/orders/create-order.port";
import { CreateOrderUseCase } from "./create-order.usecase";
import { GetProductsPort } from "src/domain/ports/products/get-products.port";
import { GetCartPort } from "src/domain/ports/carts/get-cart.port";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Product } from "src/domain/entities/product";

@Injectable()
export class CreateOrderUseCaseImpl implements CreateOrderUseCase {
    constructor(
        private readonly getCart: GetCartPort,
        private readonly getProducts: GetProductsPort,
        private readonly createOrderPort: CreateOrderPort
    ) {}
    
    public async create(accountId: string): Promise<{ orderId: string; }> {
        const cart = await this.getCart.getByOwner(accountId)
        
        if (cart.items.length === 0) {
            throw new HttpException("You need to have at least one product into the cart to create an order", HttpStatus.BAD_REQUEST)
        }

        const products = (await Promise.all(
            cart.items.map(({ productId }) => this.getProducts.getById(productId))
        ))
        .map(({ id, title, price }) => ({ id, title, price } as Product))

        return this.createOrderPort.create(accountId, products).then((orderId: string) => ({ orderId }))
    }
}