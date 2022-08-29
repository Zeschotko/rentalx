import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepositories = SpecificationRepository.getInstance()
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepositories)
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)

export { createSpecificationController }