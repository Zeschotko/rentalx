import { ISpecificationRepository } from "../../repositories/ISpecificationRepository"

interface IRequest {
    name: string
    description: string
}

class CreateSpecificationUseCase {
    constructor(private specificationsRepositories: ISpecificationRepository) {}

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = this.specificationsRepositories.findByName(name)


        if(specificationAlreadyExists) {
            throw new Error("Specification already exists!")
        }

        this.specificationsRepositories.create({
            name,
            description,
        })
    }
}

export { CreateSpecificationUseCase }