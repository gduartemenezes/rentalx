import fs from "fs";
import csvParse from "csv-parse";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ImportCategoryUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {}
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);
    
    const parseFile = csvParse()
    
    stream.pipe(parseFile);
    parseFile.on('data', async (line) => {
      console.log(line)
    })
  }
}

export { ImportCategoryUseCase };
