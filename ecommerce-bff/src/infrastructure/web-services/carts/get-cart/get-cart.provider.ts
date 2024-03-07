import { Provider } from "@nestjs/common";
import { GetCartAdapter } from "./get-cart.adapter";
import { GetCartPort } from "src/domain/ports/carts/get-cart.port";

export const GetCartProvider: Provider = {
    provide: GetCartPort,
    useClass: GetCartAdapter
}