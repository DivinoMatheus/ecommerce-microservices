import { Injectable } from "@nestjs/common";
import { DeleteProductUseCase } from "./delete-product.usecase";
import { DeleteProductRepository } from "src/domain/repositories/delete-product.repository";

@Injectable()
export class DeleteProductUseCaseImpl  implements DeleteProductUseCase{
    constructor(private readonly deleteProductRepository: DeleteProductRepository) {}
    public delete(productId: string): Promise<void> {
        return this.deleteProductRepository.delete(productId)
    }
}