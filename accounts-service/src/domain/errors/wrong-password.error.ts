import { HttpException, HttpStatus } from "@nestjs/common";

export class WrongPasswordError extends HttpException { 
    constructor() {
        super("Wrong password", HttpStatus.UNAUTHORIZED)
    }
}