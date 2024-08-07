import { Request, Response } from "express";

import { ListCategoryService } from "../../controllers/category/ListCategoryService";

class ListCategoryController {
  async handler(req: Request, res: Response) {
    const listCategoryService = new ListCategoryService();
    const category = await listCategoryService.execute();

    return res.json(category);
  }
}

export { ListCategoryController };
