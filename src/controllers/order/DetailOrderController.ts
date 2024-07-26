import { Request, Response } from "express";
import { DetailOrderService } from "../../services/order/DetailOrderService";

class DetailOrderController {
    async handler(req: Request, res: Response) {
        const order_id  = req.query.order_id as string

        const datilOrderService = new DetailOrderService()

        const orders = await datilOrderService.execute({
            order_id
        })

        return res.json(orders)

    }
}
export {DetailOrderController}