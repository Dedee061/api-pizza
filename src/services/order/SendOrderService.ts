import prismaClient from "../../prisma";

interface OrderRequst {
  order_id: string;
}

class SendOrderService {
  async execute({ order_id }: OrderRequst) {
    const order = await prismaClient.orders.update({
      where: {
        id: order_id,
      },
      data:{
        draft:false
      }
    });

    return order;
  }
}

export { SendOrderService };
