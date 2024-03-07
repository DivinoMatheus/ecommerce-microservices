import { HttpException, HttpStatus } from "@nestjs/common";

export class InvalidAuthError extends HttpException { 
    constructor() {
        super("Invalid auth token", HttpStatus.UNAUTHORIZED)
    }
}