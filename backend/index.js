import express  from "express"; 
import cors from "cors";
import dotenv from "dotenv";
import productoRoutes from "./routes/productoRoutes.js"
dotenv.config();




const app = express();//Aqui la app es igual a express

//Usando middleware: para poder recibir los datos en formato json
app.use(cors());
app.use(express.json());
app.use(productoRoutes);
app.listen(process.env.APP_PORT, ()=>{
    console.log('Server running...');
});//Aqui va el puerto que tomara de .env