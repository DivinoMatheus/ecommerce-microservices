import { Provider } from "@nestjs/common";
import { DeleteCartRepository } from "src/domain/repositories/delete-cart.repository";
import DeleteCartData from "./delete-cart.impl";

export const DeleteCartDataProvider: Provider = { 
    provide: DeleteCartRepository,
    useClass: DeleteCartData
}