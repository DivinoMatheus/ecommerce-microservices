export abstract class SendMailService { 
    public abstract send(to: string, subject: string, text: string): Promise<void>
}