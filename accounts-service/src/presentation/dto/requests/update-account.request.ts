import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class UpdateAccountRequest { 
    @IsString()
    @IsOptional()
    @ApiProperty()
    fullname: string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    nickname: string;
}