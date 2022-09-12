
import { Category } from "../../entities/Category"
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

class ListCategoriesUseCase {
    constructor(private categoriesRepositories: ICategoriesRepository) {}

    async execute(): Promise<Category[]> {
        const categories = await this.categoriesRepositories.list()
        return categories
    }
}

export { ListCategoriesUseCase }