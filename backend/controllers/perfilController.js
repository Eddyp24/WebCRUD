//importamos el cliente prisma desestructurado
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient(); //creamos una instancia de prisma client

export const getProfile = async (req, res) => {
    try {
        const response = await prisma.perfil.findMany();//aqui le hago busco en mi base de datos todo
        res.status(200).json(response);

    } catch(error) {
        res.status(500).json({msg:error.message});

    }

}



export const getProfilebyUser = async (req, res) => {

     try {
       const response = await prisma.perfil.findUnique({//aqui le hago busco en mi base de datos todo
        where: {
            usuario: String (req.params.usuario)
        }
    

    });
   
    res.status(200).json(response);

    } catch(error) {
     res.status(404).json({msg:error.message});

    }

}

export const createProfile = async (req, res) => {
    const {usuario,correo, contrasena} = req.body;
    try {
     const user = await prisma.perfil.create({//aqui creo el perfil de formato data en mi base de datoss
         data:{
             usuario: usuario,
             correo: correo,
             contrasena: contrasena
         }
         
     });
     res.status(201).json(user);
    } catch (error){
     res.status(400).json({msg:error.message});
    }
}

    export const updateProfile = async (req, res) => {
        const {usuario, correo, contrasena} = req.body;
        try {
         const user = await prisma.perfil.update({//aqui creo el perfil de formato data en mi base de datoss
            where: {
                usuario: String (req.params.usuario)
            },
        
            data:{
                usuario: usuario,
                 correo: correo,
                 contrasena: contrasena
             }
             
         });
         res.status(200).json(user);
        } catch (error){
         res.status(400).json({msg:error.message});
        }
    
    }
    
    export const deleteProfile = async (req, res) => {
        try {
            const user = await prisma.perfil.delete({//aqui creo el perfil de formato data en mi base de datoss
               where: {
                   usuario: String (req.params.usuario)
               },

            });
            res.status(200).json(user);
           } catch (error){
            res.status(400).json({msg:error.message});
           }
       
       }
    
    
    
