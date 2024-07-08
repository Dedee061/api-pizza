import { Router, Request, Response, } from 'express'

import { CreateUserController } from './controllers/users/CreateUserController'
import { AuthUserController } from './controllers/users/AuthUserController'
import { DetailUserController } from './controllers/users/DetailUserController'
import { isAuthenticated } from './middlewares/isAuthenticated'
import { CreateCategoryController } from './controllers/category/CreateCategoryController'

const router = Router()

// Routas users

//Route create
router.post('/users', new CreateUserController().Handler)

// Routes Auth
router.post('/session', new AuthUserController().Handler)

// Routes de Detalhes
router.get('/me', isAuthenticated, new DetailUserController().Handler)

// Rotas de Categoria
router.post('/category', isAuthenticated, new CreateCategoryController().handler  )

export {router}