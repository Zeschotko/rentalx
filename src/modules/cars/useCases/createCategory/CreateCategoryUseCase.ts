import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

interface IRequest {
    name: string
    description: string
}

class CreateCategoryUseCase {
    constructor(private categoriesRepositories: ICategoriesRepository) {}

    async execute( {name, description}: IRequest): Promise<void>{
        const CategoryAlreadyExist = await this.categoriesRepositories.findByName(name)

        if(CategoryAlreadyExist) {
            throw new Error("Category already exists!")
        }

        this.categoriesRepositories.create({name, description})
    }
}

export { CreateCategoryUseCase }