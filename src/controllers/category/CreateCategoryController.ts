import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
  async handler(req: Request, res: Response) {
    const createcategoryService = new CreateCategoryService();
    const { name } = req.body;
    const category = await createcategoryService.execute({ name });

    return res.json(category);
  }
}

export { CreateCategoryController };
