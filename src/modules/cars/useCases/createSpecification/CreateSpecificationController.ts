import { Request, Response } from "express";

class CreateSpecificationController {
    constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

    handle(request: Request, response: Response): Response {
    }
}


export { CreateSpecificationController }