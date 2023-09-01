import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
    const [nombre, setNombre ] = useState(""); //creo los estados de forma vacia
    const [descripcion, setDescripcion ] = useState("");
    const [precio, setPrecio ] = useState("");
    const navigate = useNavigate();

    const saveProduct = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/products", {  //datos que se van a enviar en la base de datos para guardarse
           
            nombre: nombre,
            descripcion: descripcion,
            precio: parseFloat(precio)
            });
            //para volver al navegador usamos
            navigate("/");
    };

    return (
        <div className='max-w-lg mx-auto my-10'>
            <form onSubmit={saveProduct} className='my-10'>
                <div className="flex flex-col">
                    <div className="mb-5">
                        <label className= "font-bold text-slate-700 " >Product Name</label>
                        <input type="text"
                            className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                            placeholder="Product Name"
                            value={nombre}
                            onChange = {(e)=>setNombre(e.target.value)}
                        />
                        </div>
                          <div className="mb-5">
                        <label className= "font-bold text-slate-700 " >Product Description</label>
                        <input type="text"
                            className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                            placeholder="Product Description"
                            value={descripcion}
                            onChange = {(e)=>setDescripcion(e.target.value)}
                        />
                        </div>

                         <div className="mb-5">
                        <label className= "font-bold text-slate-700 " >Price</label>
                        <input type="text"
                            className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                            placeholder="Price"
                            value={precio}
                            onChange = {(e)=>setPrecio(e.target.value)}
                        />

                    </div>
                    <button type="submit" className="w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-200">Save</button>

                </div>
            </form>
        </div>


    )
}

export default AddProduct