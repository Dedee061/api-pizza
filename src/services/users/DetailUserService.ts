import prismaClient from "../../prisma";

class DetailUserSerivce {
    async execute(user_id: string) {
        const user = await prismaClient.user.findUnique({
            where: {
                id: user_id
            },
            select:{
                id:true,
                name:true,
                email:true
            }
        })

        return user
    }
}
 export {DetailUserSerivce}