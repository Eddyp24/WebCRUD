//importamos el cliente prisma desestructurado
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient(); //creamos una instancia de prisma client

export const getClient = async (req, res) => {
    try {
        const response = await prisma.cliente.findMany();//aqui le hago busco en mi base de datos todo
        res.status(200).json(response);

    } catch(error) {
        res.status(500).json({msg:error.message});

    }

}



export const getClientbyId = async (req, res) => {

     try {
       const response = await prisma.cliente.findUnique({//aqui le hago busco en mi base de datos todo
        where: {
            id: String (req.params.id)
        }
    

    });
   
    res.status(200).json(response);

    } catch(error) {
     res.status(404).json({msg:error.message});

    }

}

export const createClient = async (req, res) => {
    const {nombre,contacto, direccion} = req.body;
    try {
     const user = await prisma.cliente.create({//aqui creo el perfil de formato data en mi base de datoss
         data:{
             nombre: nombre,
             contacto: contacto,
             direccion: direccion
         }
         
     });
     res.status(201).json(user);
    } catch (error){
     res.status(400).json({msg:error.message});
    }
}

    export const updateClient = async (req, res) => {
        const {nombre,contacto, direccion} = req.body;
        try {
         const user = await prisma.cliente.update({//aqui creo el perfil de formato data en mi base de datoss
            where: {
                id: String (req.params.id)
            },
        
            data:{
                nombre: nombre,
                contacto: contacto,
                direccion: direccion
            }
            
             
         });
         res.status(200).json(user);
        } catch (error){
         res.status(400).json({msg:error.message});
        }
    
    }
    
    export const deleteClient = async (req, res) => {
        try {
            const user = await prisma.cliente.delete({//aqui creo el perfil de formato data en mi base de datoss
               where: {
                   id: String (req.params.id)
               },

            });
            res.status(200).json(user);
           } catch (error){
            res.status(400).json({msg:error.message});
           }
       
       }
    
    
    
