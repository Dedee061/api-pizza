import { Request, Response } from "express";

import { CreateOrderService } from "../../services/order/CreateOrderService";

class CreateOrderController {
    async handler(req: Request, res: Response) {
        const {table, name} = req.body

        const createOrderService = new CreateOrderService();

        const order = await createOrderService.execute({
            table,

        })

        return res.json(order)
    } 
}

export {CreateOrderController}