import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
  async handler(req: Request, res: Response) {
    const { name, price, description, category_id } = req.body;
    


    const createproductService = new CreateProductService();

    if(!req.file) {
      throw new Error('Error upload file')
    } else {

      const {originalname, fieldname} =  req.file

      console.log(fieldname)

      const product = await createproductService.execute({
        name,
        price,
        description,
        category_id,
        banner: '',
      });
      return res.json(product)
    }


}
}

export { CreateProductController };


