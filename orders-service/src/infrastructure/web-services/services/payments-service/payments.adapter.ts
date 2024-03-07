import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom, map } from "rxjs";
import { PaymentsPort } from "src/domain/ports/payments.port";

@Injectable()
export class PaymentsAdapter implements PaymentsPort { 
    constructor(private readonly httpService: HttpService) {}

    public pay(): Promise<boolean> {
        const mapToBoolean = ({ data }) => data.result === "SUCCESS"
        return firstValueFrom(this.httpService.post<{ result: string; }>("/payments")
            .pipe(map(mapToBoolean)))
            .catch(() => false)
    }
}