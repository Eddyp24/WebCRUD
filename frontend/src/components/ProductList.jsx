import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import useSWR, { useSWRConfig } from 'swr'; // ver los datos en tiempo real



//Metodo para conseguir todos los productos desde la api
const ProductList = () => {
    const { mutate } = useSWRConfig();
    //Se crea metodo para obtner datos
    const obtener = async () =>{
        const response = await axios.get('http://localhost:5000/products'); //Aqui pones el endpoint
        return response.data;  //te devuevo la respuesto

    };


    const {data} = useSWR('products',obtener);
    // validamos
    if(!data){
    return <h2>Loading...</h2>  //si aun no hay data, se esta cargando

}
//Metodo para borrar 
    const deleteProduct = async (productId) => {
       
      await axios.delete(`http://localhost:5000/products/${productId}`);  
      //Una vez borrado, necesitamos actualizar los datos mutandolo
      mutate("products");
    };

  return (
    <div className='flex flex-col mt-5'>
        <div className="w-full">
            <Link to = "/add" className='bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg '> Add New</Link>
            <div className="relative shadow rounded-lg mt-3">
              <table className='w-full text-sm text-left'>
                <thead className='text-xs uppercase bg-gray-100'>
                    <tr>
                        <th className='py-3 px-1 text-center'>Id</th>
                        <th className='py-3 px-6'>Product Name</th>
                        <th className='py-3 px-6'>Description</th>
                        <th className='py-3 px-6'>Price</th>
                        <th className='py-3 px-1 text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* hacemos un bucle de datos, con el nombre del artuculo y producto */}
                    {data.map((product, index)=>(
                        <tr className='bg-white border-b' key={product.id}>
                        {/* cambio el id a index+1 */}
                        <td className='py-3 px-1 text-center'>{index+1}</td> 
                        <td className='py-3 px-6'>{product.nombre}</td>
                        <td className='py-3 px-6'>{product.descripcion}</td>
                        <td className='py-3 px-6'>{product.precio}</td>
                        <td className='py-3 px-1 text-center'>
                            {/* por lo que vamos a editar agremos el id,*/}
                        <Link to = {`/edit/${product.id}`} className='bg-blue-400 hover:bg-blue-700 border text-white font-medium py-1 px-3 rounded-lg mr-1 '>Edit</Link>
                        {/* le ponemos el evento onclic para tomar parametros y podamos usarlos, llamando el metodo delete product y leva como paramentro producto.id  */}
                        <button onClick={()=> deleteProduct(product.id)} className='bg-blue-400 hover:bg-blue-700 border text-white font-medium py-1 px-3 rounded-lg mr-1 '>Delete</button>
                        </td>
                    </tr>
                    ))}
                    
                </tbody>
              </table>
            </div>

        </div>
        ProductList
        </div>
  )
}

export default ProductList