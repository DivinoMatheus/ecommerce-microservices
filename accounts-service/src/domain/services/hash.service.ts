export abstract class HashService { 
    public abstract createHash(password: string): string
    public abstract compare(password: string, passwordHash: string): boolean
}