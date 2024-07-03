import { Request, Response} from 'express'

import { DetailUserSerivce } from '../../services/users/DetailUserService'

class DetailUserController {
    async Handler(req: Request, res: Response){
        const datilUserSerive = new DetailUserSerivce()

        const user = await datilUserSerive.execute()

        return res.json(user);
    }
}

export {DetailUserController}