import React, {useState, useEffect} from 'react' //uso useEffect para obtener datos
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const EditProduct = () => {
    const [nombre, setNombre ] = useState(""); //creo los estados de forma vacia
    const [descripcion, setDescripcion ] = useState("");
    const [precio, setPrecio ] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();


    useEffect(()=>{
        const getProductById = async () => {
            const response = await axios.get(`http://localhost:5000/products/${id}`);
            setNombre(response.data.nombre);
            setDescripcion(response.data.descripcion);
            setPrecio(response.data.precio);

        };
        getProductById();

    }, [id]);//esta es la dependencia del metodo llamado arriba

    const updateProduct = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/products/${id}`, {  //datos que se van a enviar en la base de datos para guardarse
           
            nombre: nombre,
            descripcion: descripcion,
            precio: parseFloat(precio)
            });
            //para volver al navegador usamos, cuando haya un cambio en el id, llamara a useEffect
            navigate("/");
    };
    console.log("Product ID:", id);
    return (
        <div className='max-w-lg mx-auto my-10'>
            <form onSubmit={updateProduct} className='my-10'>
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
                    <button type="submit" className="w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-200">Edit</button>

                </div>
            </form>
        </div>


    )
}

export default EditProduct