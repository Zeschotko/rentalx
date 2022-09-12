import { CategoriesRepositories } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

export default (): ImportCategoryController => {

    const categoriesRepositories = new CategoriesRepositories()
    const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepositories)
    const importCategoryController = new ImportCategoryController(importCategoryUseCase)
    
    return importCategoryController 
}
