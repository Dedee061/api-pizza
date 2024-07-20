import prismaClient from "../../prisma";

interface ProductRequest {
    category_id: string;
}

class ListbyCategoryService {
    async execute( {category_id} : ProductRequest) {

        const findcategory = await prismaClient.products.findMany({
            where:{
                category_id: category_id
            }
        })

        return findcategory;
    }
}

export {ListbyCategoryService}