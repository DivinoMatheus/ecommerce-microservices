export abstract class PaymentsPort { 
    public abstract pay(): Promise<boolean>
}