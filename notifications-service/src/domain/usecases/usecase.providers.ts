import { Provider } from "@nestjs/common";
import { CreateNotificationUseCaseProvider } from "./send-order-payment-notification/send-order-payment-notification.provider";

export const UseCaseProviders: Provider[] = [
    CreateNotificationUseCaseProvider,
]