import { Provider } from "@nestjs/common";
import { DeleteProductRepository } from "src/domain/repositories/delete-product.repository";
import DeleteProductData from "./delete-product.impl";

export const DeleteProductDataProvider: Provider = { 
    provide: DeleteProductRepository,
    useClass: DeleteProductData
}