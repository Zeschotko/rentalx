// import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"
import * as csvParse from 'csv-parse'
import fs from "fs"
import { CategoriesRepositories } from '../../repositories/implementations/CategoriesRepository'

interface IImportCategory {
    name: string
    description: string
}

class ImportCategoryUseCase {
    constructor(private categoriesRepositories: CategoriesRepositories) {}

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path)

            const categories: IImportCategory[] = []

            const parseFile = csvParse.parse()

            stream.pipe(parseFile)

            parseFile.on("data", async (line) => {
                const [name, description] = line
                categories.push({
                    name, description
                })
            }).on("end", () => {
                fs.promises.unlink(file.path)
                resolve(categories)
            }).on("error", (err) => {
                reject(err)
            })

            return categories
        })
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file)
    
        categories.map(async category => {
            const {name, description} = category 

            const existCategory = this.categoriesRepositories.findByName(name)

            if(!existCategory){
                this.categoriesRepositories.create({
                    name, description
                })
            }
        })
    }

}

export { ImportCategoryUseCase }