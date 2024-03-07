import { Injectable } from "@nestjs/common";
import { RemoveProductsFromCartUseCase } from "./remove-products-from-cart.usecase";
import { DeleteCartRepository } from "src/domain/repositories/delete-cart.repository";
import { FindCartByOwnerRepository } from "src/domain/repositories/find-cart-by-owner.repository";
import { CartItem } from "src/domain/entities/cart-item";
import { UpdateCartRepository } from "src/domain/repositories/update-cart.repository";
import { Cart } from "src/domain/entities/cart";

@Injectable()
export class RemoveProductsFromCartUseCaseImpl  implements RemoveProductsFromCartUseCase {
    constructor(
        private readonly findCartByOwnerId: FindCartByOwnerRepository,
        private readonly updateCartRepository: UpdateCartRepository
    ) {}
    
    public async remove(owner: string, items: Array<string>): Promise<Cart> {
        const cart = await this.findCartByOwnerId.findByOwner(owner)
        const cartItems = cart.items

        const updatedCartItems = cartItems.filter((cartItem: CartItem) => {
            return !items.includes(cartItem.productId)
        })

        return this.updateCartRepository.update({ ...cart, items: updatedCartItems })
    }
}