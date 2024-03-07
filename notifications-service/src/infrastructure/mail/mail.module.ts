import { Module } from "@nestjs/common";
import { SendMailProvider } from "./send-mail/send-mail.provider";
import { MailerModule } from "@nestjs-modules/mailer";

@Module({
    imports: [
        MailerModule.forRoot({
            transport: {
                host: process.env.MAIL_SMTP_HOST,
                port: process.env.MAIL_SMTP_PORT as unknown as number,
                auth: {
                    user: process.env.MAIL_SMTP_USER,
                    pass: process.env.MAIL_SMTP_PASS,
                },
            }
        })
    ],
    providers: [SendMailProvider],
    exports: [SendMailProvider],
})
export class MailModule {}