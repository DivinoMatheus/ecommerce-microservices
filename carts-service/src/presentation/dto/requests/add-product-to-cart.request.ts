import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AddProductToCartRequest {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  productId: string;
}
