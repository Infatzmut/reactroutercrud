import React , { useEffect, useState }from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Productos from './components/Productos';
import EditarProducto from './components/EditarProducto';
import AgregarProducto from './components/AgregarProducto';
import Producto from './components/Producto';
import Header from './components/Header';

function App() {

  const [productos, guardarProductos] = useState([]);
  const [loadProducts, reloadProducts] = useState(true);

  useEffect(()=> {
    if(loadProducts){
      const consultarApi = async () => {
        // consultar la api de json-server
        const resultado = await axios.get('http://localhost:4000/restaurant');
        
        guardarProductos(resultado.data);
      }
      consultarApi();

      // Cambia a fase de la recarga de los productos 
      reloadProducts(false)
    }
  },[loadProducts])
  return (
    <div className="App">
     <Router>
       <Header/>
       <main className="container mt-5">
       <Switch>
          <Route exact path="/productos" render={()=>(
            <Productos 
            productos={productos}
            reloadProducts={reloadProducts}/>
           )
          }/>
          <Route exact path="/productos/nuevo" 
          render={()=><AgregarProducto reloadProducts={reloadProducts}/>} />
         
          <Route exact path="/productos/:id" component={Producto}/>
          <Route exact path="/productos/editar/:id" 
          render={props =>{
            // Tomar el id del producto
            const idProducto = parseInt(props.match.params.id);
            // El producto que se pasa al state
            const producto = productos.filter(producto => producto.id === idProducto)
            return (
              <EditarProducto 
              producto = {producto[0]}
              reloadProducts = {reloadProducts}/>
            )
          }}/>
       </Switch>
       <p className="mt-4 p2 text-center">Todos los derechos reservados</p>
       </main>
     </Router>
    </div>
  );
}

export default App;
