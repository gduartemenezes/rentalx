import { ICreateSpecificationDTO, ISpecificationsRepository } from "./ISpecificantionsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    create({ name, description }: ICreateSpecificationDTO): void {
        throw new Error("Method not implemented.");
    }
    
}

export { SpecificationsRepository }