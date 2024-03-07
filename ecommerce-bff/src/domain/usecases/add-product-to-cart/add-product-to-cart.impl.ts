import { Cart } from "src/domain/entities/cart";
import { AddProductToCartUseCase } from "./add-product-to-cart.usecase";
import { Injectable } from "@nestjs/common";
import { AddProductToCartPort } from "src/domain/ports/carts/add-product-to-cart.port";
import { GetProductsPort } from "src/domain/ports/products/get-products.port";

@Injectable()
export class AddProductToCartUseCaseImpl implements AddProductToCartUseCase {
    constructor(
        private readonly getProducts: GetProductsPort,
        private readonly addProductToCart: AddProductToCartPort) {}

    public async add(accountId: string, productId: string): Promise<Cart> {
        const product = await this.getProducts.getById(productId)
        const cart = await this.addProductToCart.add(accountId, product.id)
        const alreadyInCartProductIds= cart.items.filter((cartItem) => cartItem.productId !== productId)
        const cartProducts = [
            await Promise.all(alreadyInCartProductIds.map(cartItem => this.getProducts.getById(cartItem.productId))),
            product
        ]

        return { ...cart, items: cartProducts as any }
    } 

}