import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateAuthUseCase } from 'src/domain/usecases/create-auth/create-auth.usecase';
import { Auth } from 'src/domain/entities/auth';
import { CreateAuthRequest } from './dto/requests/create-auth.request';
import { PublicAccount } from 'src/domain/entities/public-account';
import { VerifyAuthUseCase } from 'src/domain/usecases/verify-auth/verify-auth.usecase';
import { Request } from 'express';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly createAuthUseCase: CreateAuthUseCase,
    private readonly verifyAuthUseCase: VerifyAuthUseCase
  ) {}

  @Post()
  async login(@Body() body: CreateAuthRequest): Promise<Auth> {
    return this.createAuthUseCase.login(body.email, body.password);
  }

  @Get("/account")
  @ApiBearerAuth()
  async getAuthAccount(@Req() request: Request): Promise<PublicAccount> {
    const bearerToken = request.headers.authorization ?? ''
    const token = bearerToken.replace('Bearer ', '')
    return this.verifyAuthUseCase.verify(token)
  }
}
