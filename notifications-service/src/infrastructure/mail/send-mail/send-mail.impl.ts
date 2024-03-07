import { SendMailService } from "src/domain/services/send-mail.service";
import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";

@Injectable()
export class SendMailServiceImpl implements SendMailService {
    constructor(private readonly mailerService: MailerService) {}

    public async send(to: string, subject: string, text: string): Promise<void> { 
        const options = { 
            from: process.env.MAIL_SMTP_USER,
            to,
            subject,
            html: text
        }

        await this.mailerService.sendMail(options)
    }
}