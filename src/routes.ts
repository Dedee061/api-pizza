import { Router, Request, Response, } from 'express'
import multer from 'multer'

import { CreateUserController } from './controllers/users/CreateUserController'
import { AuthUserController } from './controllers/users/AuthUserController'
import { DetailUserController } from './controllers/users/DetailUserController'
import { isAuthenticated } from './middlewares/isAuthenticated'
import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './services/category/ListCategoryController'
import { CreateProductController } from './controllers/product/CreateProductController'
import uploadConfig from './config/multer'

const router = Router()

const upload = multer(uploadConfig.upload("./tmp"))

// Routas users

//Route create
router.post('/users', new CreateUserController().Handler)

// Routes Auth
router.post('/session', new AuthUserController().Handler)

// Routes de Detalhes
router.get('/me', isAuthenticated, new DetailUserController().Handler)

// Rotas de Categoria
router.post('/category', isAuthenticated, new CreateCategoryController().handler  )
router.get('/category', isAuthenticated, new ListCategoryController().handler  )

// rotas product
router.post('/product', isAuthenticated , upload.single('file'), new CreateProductController().handler)


export {router}

