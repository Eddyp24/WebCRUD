import express  from "express";
import {
    getClient,
    getClientbyId,
    createClient,
    updateClient,
    deleteClient



} from "../controllers/clienteController.js" //Aqui, estas importando varias funciones desde el archivo perfilController.js en la carpeta de controladores. 
const  router = express.Router();

router.get('/client', getClient);
router.get('/client/:id', getClientbyId);
router.post('/client', createClient);
router.put('/client/:id', updateClient);
router.delete('/client/:id', deleteClient);


export default router; //exporto el enrutador configurado para que pueda ser importado y utilizado en el archivo principal de tu aplicación.