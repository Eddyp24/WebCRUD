import express  from "express";
import {
    getProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct



} from "../controllers/productoController.js"
const  router = express.Router();

router.get('/products', getProduct);
router.get('/products/:id', getProductById);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);


export default router; // 