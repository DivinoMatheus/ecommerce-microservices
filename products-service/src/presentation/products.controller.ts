import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Product } from 'src/domain/entities/product';
import { CreateProductUseCase } from 'src/domain/usecases/create-product/create-product.usecase';
import { FindAllProductsUseCase } from 'src/domain/usecases/find-all-products/find-all-products.usecase';
import { CreateProductRequest } from './dto/requests/create-product.request';
import { FindAllProductsResponse } from './dto/responses/find-all-products.response';
import { DeleteProductUseCase } from 'src/domain/usecases/delete-product/delete-product.usecase';
import { UpdateProductUseCase } from 'src/domain/usecases/update-product/update-product.usecase';
import { UpdateProductRequest } from './dto/requests/update-product.request';
import { FindProductByIdUseCase } from 'src/domain/usecases/find-product-by-id/find-product-by-id.usecase';
import { FindProductByIdResponse } from './dto/responses/find-product-by-id.response';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(
    private readonly findProductByIdUseCase: FindProductByIdUseCase,
    private readonly findAllProductsUseCase: FindAllProductsUseCase,
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly deleteProductUsecase: DeleteProductUseCase,
    private readonly updateProductUseCase: UpdateProductUseCase
  ) {}

  @Get()
  async findAll(): Promise<FindAllProductsResponse> {
    return this.findAllProductsUseCase.findAll();
  }

  @Get(":productId")
  async findById(@Param("productId") productId: string): Promise<FindProductByIdResponse> {
    return this.findProductByIdUseCase.findById(productId);
  }

  @Post()
  async create(@Body() body: CreateProductRequest): Promise<void> {
    return this.createProductUseCase.create(body as Product);
  }

  @Delete(":productId")
  async delete(@Param("productId") productId: string) { 
    if (!productId) throw new HttpException("productId param cannot be empty", HttpStatus.BAD_REQUEST)
    return this.deleteProductUsecase.delete(productId)
  }

  @Put(":productId")
  async update(@Param("productId") productId: string, @Body() body: UpdateProductRequest) { 
    if (!productId) throw new HttpException("productId param cannot be empty", HttpStatus.BAD_REQUEST)
    return this.updateProductUseCase.update({ id: productId, ...body } as Product)
  }
}
