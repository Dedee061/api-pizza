import { Request,Response } from "express";

import { RemoveItemService } from "../../services/order/RemoveItemService";

class RemoveItemController {
    async handler(req: Request, res: Response) {
        const item_id = req.query.item_id as string


        
        const removeItemsSrvice = new RemoveItemService()

        const order = await removeItemsSrvice.execute({
            item_id
        })

        return res.json(order)
    }

}

export {RemoveItemController}