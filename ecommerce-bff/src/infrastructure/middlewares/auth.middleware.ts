import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { GetAuthAccountPort } from "src/domain/ports/accounts/get-auth-account.port";

@Injectable()
export class AuthMiddleware implements NestMiddleware { 
    private readonly logger: Logger = new Logger(AuthMiddleware.name)
    constructor(private readonly getAuthAccountsPort: GetAuthAccountPort) {}

    use(req: any, res: any, next: (error?: any) => void) {
        const token = req.headers.authorization ?? ''
        console.log("received token", token)

        return this.getAuthAccountsPort.getByToken(token).then((account) => {
            req.headers['x-account-id'] = account.id
            this.logger.debug("Authentication approved successfully")
            next()
        })
    }
}