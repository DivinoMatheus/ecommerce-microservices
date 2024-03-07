import { HttpException, HttpStatus } from "@nestjs/common";

export class AccountNotFoundError extends HttpException { 
    constructor(message: string) {
        super(message ?? "Account not found", HttpStatus.NOT_FOUND)
    }

    static ofEmail(email: string) { 
        return new AccountNotFoundError(`Account not found for the following e-mail: ${email}`)
    }

    static ofAccountId(accountId: string) { 
        return new AccountNotFoundError(`Account not found for the following id: ${accountId}`)
    }
}