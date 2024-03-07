import { ApiProperty } from "@nestjs/swagger";
import { ArrayMinSize, ArrayNotEmpty, IsArray, IsString } from "class-validator";

export class RemoveProductsFromCartRequest { 
    @IsArray()
    @IsString({ each: true })
    @ArrayMinSize(1)
    @ApiProperty()
    products: Array<string>;
}