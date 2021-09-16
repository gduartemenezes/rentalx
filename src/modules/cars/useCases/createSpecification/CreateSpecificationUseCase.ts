import { ISpecificationsRepository } from "../../repositories/ISpecificantionsRepository";


class CreateSpecificationUseCase {
    constructor (private specificationsRepository: ISpecificationsRepository){}
    
    execute({name, description}: IRequest): void {
        this.specificationsRepository.create({name, description})
    }
}

export { CreateSpecificationUseCase }