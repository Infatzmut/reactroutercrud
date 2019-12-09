import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function ProductoLista({producto, reloadProducts}){
    const eliminarProducto = id => {
        Swal.fire({
            title: '¿Estas seguro?',
            text: "Un platillo eliminado no se puede recuperar",
            type: 'warning',
            showCancelButton : 'true',
            confirmButtonColor : '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it',
            cancelButtonText: 'Cancelar'
        }).then(async result => {
            if(result.value){
                const url = `http://localhost:4000/restaurant/${id}`
                try{
                    const resultado = await axios.delete(url);
                    if(resultado.status === 200){
                        Swal.fire(
                            'Eliminar',
                            'El producto se ha eliminado',
                            'success'
                        )
                        reloadProducts(true)
                    }

                }catch(error){console.log(error);
                }
                
            }
        })

    }
    
    return(
    <li data-categoria={producto.categoria} className="list-group-item d-flex justify-content-between align-items-center">
        <p >
            {producto.nombrePlatillo}
            <span className="font-weight-bold">${producto.precioPlatillo}</span>
        </p>
        <div>
            <Link to={`/productos/editar/${producto.id}`}
            className="btn btn-success mt-2">Editar</Link>
            <button type="button" className="btn btn-danger"
            onClick={()=>eliminarProducto(producto.id)}
            >Eliminar</button>
        </div>
    </li>)
}