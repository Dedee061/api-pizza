import { Router, Request, Response, } from 'express'
import multer from 'multer'

import { CreateUserController } from './controllers/users/CreateUserController'
import { AuthUserController } from './controllers/users/AuthUserController'
import { DetailUserController } from './controllers/users/DetailUserController'
import { isAuthenticated } from './middlewares/isAuthenticated'
import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './services/category/ListCategoryController'
import { CreateProductController } from './controllers/product/CreateProductController'
import { ListByCategoryController } from './controllers/product/ListByCategoryController'
import { CreateOrderController } from './controllers/order/CreateOrderController'
import { RemoveOrderController } from './controllers/order/RemoveOrderController'
import { AddItemController } from './controllers/order/AddItemController'
import { RemoveItemController } from './controllers/order/RemoveItemController'
import { SendOrderController } from './controllers/order/SendOrderController'
import { ListOrderController } from './controllers/order/ListOrderController'
import { DetailOrderController } from './controllers/order/DetailOrderController'

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
router.get('/category/product', isAuthenticated , new ListByCategoryController().handler)

// rotas order
router.post('/order', isAuthenticated , new CreateOrderController().handler)
router.delete('/order', isAuthenticated , new RemoveOrderController().handler)
router.post('/order/add', isAuthenticated , new AddItemController().handler)
router.delete('/order/remove', isAuthenticated , new RemoveItemController().handler)
router.put('/order/send', isAuthenticated , new SendOrderController().handler)
router.get('/orders', isAuthenticated , new ListOrderController().handler)
router.get('/orders/detail', isAuthenticated , new DetailOrderController().handler)


export {router}

