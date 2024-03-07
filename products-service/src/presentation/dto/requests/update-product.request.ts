import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateProductRequest { 
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    title: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    description: string;
  
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    price: number;
}