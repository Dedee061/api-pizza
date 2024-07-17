import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
  async handler(req: Request, res: Response) {
    const { name, price, description, category_id } = req.body;
    let banner = "";

    const createproductService = new CreateProductService();

    const product = await createproductService.execute({
      name,
      price,
      description,
      category_id,
      banner,
    });
    return res.json(product)
}
}

export { CreateProductController };
