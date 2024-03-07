import { SendMailService } from "src/domain/services/send-mail.service";
import { SendMailServiceImpl } from "./send-mail.impl";
import { Provider } from "@nestjs/common";

export const SendMailProvider: Provider = { 
    provide: SendMailService,
    useClass: SendMailServiceImpl
}