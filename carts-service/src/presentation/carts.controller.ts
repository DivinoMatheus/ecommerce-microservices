import { Body, Controller, Get, Headers, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { AddProductToCartRequest } from './dto/requests/add-product-to-cart.request';
import { FindCartByOwnerUseCase } from 'src/domain/usecases/find-cart-by-owner/find-cart-by-owner.usecase';
import { FindCartByIdResponse } from './dto/responses/find-cart-by-id.response';
import { RemoveProductsFromCartUseCase } from 'src/domain/usecases/remove-products-from-cart/remove-products-from-cart.usecase';
import { AddProductToCartUseCase } from 'src/domain/usecases/add-product-to-card/add-product-to-cart.usecase';
import { RemoveProductsFromCartRequest } from './dto/requests/remove-products-from-cart.request';
import { Cart } from 'src/domain/entities/cart';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { DeleteCartByOwnerUseCase } from 'src/domain/usecases/delete-cart-by-owner/delete-cart-by-owner.usecase';

@ApiTags('carts')
@Controller('carts')
export class CartsController {
  constructor(
    private readonly findCartByIdUseCase: FindCartByOwnerUseCase,
    private readonly addProductToCartUseCase: AddProductToCartUseCase,
    private readonly removeProductsFromCartUseCase: RemoveProductsFromCartUseCase,
    private readonly deleteCartByOwnerUseCase: DeleteCartByOwnerUseCase
  ) {}

  @Get()
  @ApiHeader({ name: "x-account-id", required: true })
  async findById(@Headers() headers: Record<string, string>): Promise<FindCartByIdResponse> {
    const accountId = headers['x-account-id']
    if (!accountId) throw new HttpException("x-account-id header cannot be empty", HttpStatus.BAD_REQUEST)
    return this.findCartByIdUseCase.findByOwner(accountId);
  }

  @Post("add-product")
  @ApiHeader({ name: "x-account-id", required: true })
  async add(
    @Headers() headers: Record<string, string>,
    @Body() body: AddProductToCartRequest
    ): Promise<Cart> {
    const accountId = headers["x-account-id"]

    if (!accountId) throw new HttpException("x-account-id header cannot be empty", HttpStatus.BAD_REQUEST)

    return this.addProductToCartUseCase.add(accountId, { productId: body.productId });
  }

  @Post("remove-products")
  @ApiHeader({ name: "x-account-id", required: true })
  async delete(
    @Headers() headers: Record<string, string>,
    @Body() body: RemoveProductsFromCartRequest) {
    const accountId = headers["x-account-id"]

    if (!accountId) throw new HttpException("x-account-id header cannot be empty", HttpStatus.BAD_REQUEST)

    return this.removeProductsFromCartUseCase.remove(accountId, body.products)
  }

  @MessagePattern('created')
  async processOrderCreated(@Payload() data, @Ctx() context: RmqContext): Promise<void> {
    console.log('message received', data)
    try { 
      const channel = context.getChannelRef();
      const originalMsg = context.getMessage();

      await this.deleteCartByOwnerUseCase.delete(data.owner).then(() => channel.ack(originalMsg));
    } catch (error) {
      // this.logger.error(`Something wrong happened: ${error.message}`, error);
    }
  }
}
