import { Provider } from "@nestjs/common";
import UpdateProductData from "./update-product.impl";
import { UpdateProductRepository } from "src/domain/repositories/update-product.repository";

export const UpdateProductDataProvider: Provider = { 
    provide: UpdateProductRepository,
    useClass: UpdateProductData
}