import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

interface IRequest {
    name: string
    description: string
}

class CreateCategoryUseCase {
    constructor(private categoriesRepositories: ICategoriesRepository) {}

    execute( {name, description}: IRequest): void{
        const CategoryAlreadyExist = this.categoriesRepositories.findByName(name)

        if(CategoryAlreadyExist) {
            throw new Error("Category already exists!")
        }

        this.categoriesRepositories.create({name, description})
    }
}

export { CreateCategoryUseCase }