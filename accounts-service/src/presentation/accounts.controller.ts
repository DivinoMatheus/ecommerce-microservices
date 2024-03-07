import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Account } from 'src/domain/entities/account';
import { CreateAccountUseCase } from 'src/domain/usecases/create-account/create-account.usecase';
import { FindAccountByIdUseCase } from 'src/domain/usecases/find-account-by-id/find-account-by-id.usecase';
import { CreateAccountRequest } from './dto/requests/create-account.request';
import { DeleteAccountUseCase } from 'src/domain/usecases/delete-account/delete-account.usecase';
import { UpdateAccountUseCase } from 'src/domain/usecases/update-account/update-account.usecase';
import { UpdateAccountRequest } from './dto/requests/update-account.request';
import { FindAccountByIdResponse } from './dto/responses/find-account-by-id.response';
import { FindAccountByEmailResponse } from './dto/responses/find-account-by-email.response';
import { FindAccountByEmailUseCase } from 'src/domain/usecases/find-account-by-email/find-account-by-email.usecase';
import { PublicAccount } from 'src/domain/entities/public-account';

@ApiTags('accounts')
@Controller('accounts')
export class AccountsController {
  constructor(
    private readonly findAccountByEmailUseCase: FindAccountByEmailUseCase,
    private readonly findAccountByIdUseCase: FindAccountByIdUseCase,
    private readonly createAccountUseCase: CreateAccountUseCase,
    private readonly deleteAccountUsecase: DeleteAccountUseCase,
    private readonly updateAccountUseCase: UpdateAccountUseCase
  ) {}

  @Post()
  async create(@Body() body: CreateAccountRequest): Promise<PublicAccount> {
    return this.createAccountUseCase.create(body as Account);
  }
  
  @Get(":accountId")
  async findById(@Param("accountId") accountId: string): Promise<FindAccountByIdResponse> {
    if (!accountId) throw new HttpException("accountId param cannot be empty", HttpStatus.BAD_REQUEST)
    return this.findAccountByIdUseCase.findById(accountId);
  }

  @Get()
  async findByEmail(@Query("email") email: string): Promise<FindAccountByEmailResponse> {
    if (!email) throw new HttpException("email param cannot be empty", HttpStatus.BAD_REQUEST)
    return this.findAccountByEmailUseCase.findByEmail(email);
  }

  @Delete(":accountId")
  async delete(@Param("accountId") accountId: string) { 
    if (!accountId) throw new HttpException("accountId param cannot be empty", HttpStatus.BAD_REQUEST)
    return this.deleteAccountUsecase.delete(accountId)
  }

  @Put(":accountId")
  async update(@Param("accountId") accountId: string, @Body() body: UpdateAccountRequest) { 
    if (!accountId) throw new HttpException("accountId param cannot be empty", HttpStatus.BAD_REQUEST)
    return this.updateAccountUseCase.update({ id: accountId, ...body } as Account)
  }
}
