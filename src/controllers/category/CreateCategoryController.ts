import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
    async handler(req: Request, res: Response) {
        const createcategoryService = new CreateCategoryService();

        const category = await createcategoryService.execute()

        return res.json(category)
    }
}

export {CreateCategoryController}