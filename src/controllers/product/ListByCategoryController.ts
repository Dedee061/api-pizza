import { Request , Response } from "express";
import { ListbyCategoryService } from "../../services/product/ListbyCategoryService";


class ListByCategoryController {
    async handler(req: Request, res: Response) {
        const category_id = req.query.category_id as string


        const listbycategory = new ListbyCategoryService

        const product = await listbycategory.execute({
            category_id
        })
        
        return res.json(product)

    }
}

export {ListByCategoryController}