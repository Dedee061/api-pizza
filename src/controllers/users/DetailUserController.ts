import { Request, Response} from 'express'

import { DetailUserSerivce } from '../../services/users/DetailUserService'

class DetailUserController {
    async Handler(req: Request, res: Response){

        const user_id = req.user_id
        
        console.log('ID DO USER', user_id)

        const datilUserSerive = new DetailUserSerivce()

        const user = await datilUserSerive.execute(user_id)

        return res.json(user);
    }
}

export {DetailUserController}