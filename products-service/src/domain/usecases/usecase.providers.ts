import { Provider } from "@nestjs/common";
import { CreateProductUseCaseProvider } from "./create-product/create-product.provider";
import { DeleteProductUseCaseProvider } from "./delete-product/delete-product.provider";
import { FindAllProductsUseCaseProvider } from "./find-all-products/find-all-products.provider";
import { UpdateProductUseCaseProvider } from "./update-product/update-product.provider";
import { FindProductByIdUseCaseProvider } from "./find-product-by-id/find-product-by-id.provider";

export const UseCaseProviders: Provider[] = [
    CreateProductUseCaseProvider, 
    FindProductByIdUseCaseProvider,
    FindAllProductsUseCaseProvider, 
    UpdateProductUseCaseProvider, 
    DeleteProductUseCaseProvider
]