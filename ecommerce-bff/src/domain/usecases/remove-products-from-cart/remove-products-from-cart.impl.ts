import { Cart } from "src/domain/entities/cart";
import { Injectable } from "@nestjs/common";
import { AddProductToCartPort } from "src/domain/ports/carts/add-product-to-cart.port";
import { GetProductsPort } from "src/domain/ports/products/get-products.port";
import { RemoveProductsFromCartUseCase } from "./remove-products-from-cart.usecase";
import { RemoveProductsFromCartPort } from "src/domain/ports/carts/remove-products-from-cart.port";

@Injectable()
export class RemoveProductsFromCartUseCaseImpl implements RemoveProductsFromCartUseCase {
    constructor(
        private readonly getProducts: GetProductsPort,
        private readonly removeProductsFromCart: RemoveProductsFromCartPort) {}

    public async remove(accountId: string, productIds: Array<string>): Promise<Cart> {
        const products = await Promise.all(
            productIds.map(
                (productId: string) => this.getProducts.getById(productId).then(({ id }) => id)
            )
        )

        return this.removeProductsFromCart.remove(accountId, products)
    }
}