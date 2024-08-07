
import { Request, Response } from "express"
import { RemoveOrderService } from "../../services/order/RemoveOrderService"
class RemoveOrderController{
    async handler(req: Request, res: Response){
        const order_id = req.query.order_id as string;

        const removerOrder = new RemoveOrderService()

        const order = await removerOrder.execute({
            order_id
        })

        return res.json(order)

    }
}

export {RemoveOrderController}