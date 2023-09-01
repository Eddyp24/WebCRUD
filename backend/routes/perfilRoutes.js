import express  from "express";
import {
    getProfile,
    getProfilebyUser,
    createProfile,
    updateProfile,
    deleteProfile



} from "../controllers/perfilController.js" //Aqui, estas importando varias funciones desde el archivo perfilController.js en la carpeta de controladores. 
const  router = express.Router();

router.get('/profile', getProfile);
router.get('/profile/:id', getProfilebyUser);
router.post('/profile', createProfile);
router.put('/profile/:usuario', updateProfile);
router.delete('/profile/:usuario', deleteProfile);


export default router; //exporto el enrutador configurado para que pueda ser importado y utilizado en el archivo principal de tu aplicación.