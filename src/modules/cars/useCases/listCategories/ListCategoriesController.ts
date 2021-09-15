import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";


class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) {
        this.listCategoriesUseCase
    }

    handle(request: Request, response: Response): Response {
        const allCategories = this.listCategoriesUseCase.list()
        return response.status(200).json(allCategories) 
    }
}

export { ListCategoriesController }