import React, {Fragment} from 'react';
import ProductoLista from './ProductoLista';

export default function Productos({productos, reloadProducts}){
    return (
        <Fragment >
        <h1 className="text-center">Productos</h1>
        <ul className="list-group mt-5">
            {productos.map(producto => (
                <ProductoLista 
                key={producto.id} 
                producto={producto}
                reloadProducts={reloadProducts} />
            ))}
        </ul>
        </Fragment>
    )
}