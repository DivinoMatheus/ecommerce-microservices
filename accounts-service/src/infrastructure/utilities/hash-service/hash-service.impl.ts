import { Injectable } from "@nestjs/common";
import { HashService } from "src/domain/services/hash.service";
import { BinaryToTextEncoding, createHash } from "crypto";

@Injectable()
export class HashServiceImpl implements HashService {
    private HASH_ALGORITHM: string = 'sha256'  
    private HASH_DIGEST: BinaryToTextEncoding = 'hex'

    public createHash(password: string): string {
        return createHash(this.HASH_ALGORITHM).update(password).digest(this.HASH_DIGEST)
    }
    public compare(password: string, passwordHash: string): boolean {
        const hash = this.createHash(password)
        return hash === passwordHash
    }
}