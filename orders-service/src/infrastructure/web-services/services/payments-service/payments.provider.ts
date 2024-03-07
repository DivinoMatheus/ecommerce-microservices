import { PaymentsPort } from "src/domain/ports/payments.port";
import { PaymentsAdapter } from "./payments.adapter";
import { Provider } from "@nestjs/common";

export const PaymentsProvider: Provider = { 
    provide: PaymentsPort,
    useClass: PaymentsAdapter
}