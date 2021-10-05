import fs from "fs";
import csvParse from "csv-parse";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {}
  loadCategories(file: Express.Multer.File) {
    const stream = fs.createReadStream(file.path);
    const categories: IImportCategory[] = []
    const parseFile = csvParse();

    stream.pipe(parseFile);
    parseFile.on("data", async (line) => {
      const [name, description] = line
      categories.push({
        name,
        description
      })
    });
  }

  execute(file: Express.Multer.File): void {}
}

export { ImportCategoryUseCase };
