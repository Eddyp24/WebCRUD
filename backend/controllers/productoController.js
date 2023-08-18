//importamos el cliente prisma desestructurado
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient(); //creamos una instancia de prisma client

export const getProduct = async (req, res) => {
    try {
        const response = await prisma.producto.findMany();//aqui le hago busco en my base de datos todo
        res.status(200).json(response);

    } catch(error) {
        res.status(500).json({msg:error.message});

    }

}

export const getProductById = async (req, res) => {
    try {
        const response = await prisma.producto.findUnique({//aqui le hago busco en my base de datos solo por una unica identidad que seria el id
            where:{
                id: Number( req.params.id) //parara que sea un numero
            }

        });   //vamos a ecnontrar por id
        res.status(200).json(response);

    } catch(error) {
        res.status(404).json({msg:error.message});

    }

}

export const createProduct = async (req, res) => {
   const {nombre,descripcion, precio} = req.body;
   try {
    const product = await prisma.producto.create({//aqui creo el producto de formato data en mi base de datoss
        data:{
            nombre: nombre,
            descripcion: descripcion,
            precio: precio
        }
        
    });
    res.status(201).json(product);
   } catch (error){
    res.status(400).json({msg:error.message});
   }
}

export const updateProduct = async (req, res) => {
    const {nombre,descripcion, precio} = req.body;
    try {
        const product = await prisma.producto.update({ //aqui le hago busco en my base de datos y actualizo

            where: {
                id: Number(req.params.id)
            },
            data:{
                nombre: nombre,
                descripcion: descripcion,
                precio: precio
            }
            
        });
        res.status(200).json(product); //aqui obtengo la respuesta
       } catch (error){
        res.status(400).json({msg:error.message});
       }
    }
    
export const deleteProduct =  async (req, res) => {
    try {
        const product = await prisma.producto.delete({ //hace que la operacion se complete antes de enviar la respuesta
            where:{
                id: Number(req.params.id)
            },

        });
        res.status(200).json(product); //aqui obtengo la respuesta
    }catch(error){
        res.status(400).json({msg:error.message});
    }
    
}

