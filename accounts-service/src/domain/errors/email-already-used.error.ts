import { HttpException, HttpStatus } from "@nestjs/common";

export class EmailAlreadyUsedError extends HttpException { 
    constructor() {
        super("The provided e-mail is already being used", HttpStatus.CONFLICT)
    }
}