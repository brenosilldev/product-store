import { Router} from "express";

import { ProductController } from "./controllers/product.js";

const produtccontroller = new ProductController();

const router = Router();

router.post('/products/create',produtccontroller.CreateProduct)
router.get('/products/get',produtccontroller.GetProducts)
router.get('/products/get/:id',produtccontroller.GetProductsDetails)
router.delete('/products/:id',produtccontroller.DeleteProduct)
router.put('/products/:id',produtccontroller.UpdateProduct)


export { router }