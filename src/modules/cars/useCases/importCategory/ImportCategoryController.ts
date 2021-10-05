import { Request, Response } from "express";



class ImportCategoryController {
  // constructor(private importCategoryUseCase: ImportCategoryUseCase) {
  //   this.importCategoryUseCase
  // }

  handle(request: Request, response: Response): Response {
    const {file} = request
    console.log(file) 
    return response.send()
  }
}


export { ImportCategoryController }