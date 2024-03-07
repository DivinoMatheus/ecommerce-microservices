import { Body, Controller, Headers, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AddProductToCartRequest } from './dto/requests/add-product-to-cart.request';
import { AddProductToCartUseCase } from 'src/domain/usecases/add-product-to-cart/add-product-to-cart.usecase';
import { RemoveProductsFromCartUseCase } from 'src/domain/usecases/remove-products-from-cart/remove-products-from-cart.usecase';
import { RemoveProductsFromCartRequest } from './dto/requests/remove-products-from-cart.request';
import { Cart } from 'src/domain/entities/cart';

@ApiTags('carts')
@Controller('carts')
export class CartsController {
  constructor(
    private readonly addProductToCartUseCase: AddProductToCartUseCase,
    private readonly removeProductsFromCartUseCase: RemoveProductsFromCartUseCase
  ) {}

  @Post("add-product")
  @ApiBearerAuth()
  addProductToCart(
    @Headers() headers,
    @Body() body: AddProductToCartRequest): Promise<Cart> { 
    const accountId = headers['x-account-id'] as string
    return this.addProductToCartUseCase.add(accountId, body.productId)
  }

  @Post("remove-products")
  @ApiBearerAuth()
  removeProductsFromCart(
    @Headers() headers,
    @Body() body: RemoveProductsFromCartRequest): Promise<Cart> { 
    const accountId = headers['x-account-id'] as string
    return this.removeProductsFromCartUseCase.remove(accountId, body.products)
  }
}
