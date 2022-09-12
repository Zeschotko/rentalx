import { CategoriesRepositories } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export default (): ListCategoriesController => {

    const categoriesRepositories = new CategoriesRepositories()
    const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepositories)
    const listCategoriesController = new ListCategoriesController(listCategoriesUseCase)

    return listCategoriesController 
}