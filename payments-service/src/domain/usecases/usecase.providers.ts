import { Provider } from "@nestjs/common";
import { CreatePaymentUseCaseProvider } from "./create-payment/create-payment.provider";
export const UseCaseProviders: Provider[] = [
    CreatePaymentUseCaseProvider,
]