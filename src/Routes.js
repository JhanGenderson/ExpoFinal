import {Route} from 'react-router-dom'
import InicioView from './Views/InicioView'
import PlatoView from './Views/PlatoView'
import PlatosEntradaView from './Views/PlatosEntradaView'
import CarritoView from './Views/CarritoView'
import Headers from './Components/Headers'
import CompraView from './Views/CompraView'

export default function Routes() {
    return (
        <div>
            <Route path="/" exact component={Headers}/>
            <Route exact path="/categorias" component={InicioView}/>
            <Route path="/categoriaplato/:id" component={PlatosEntradaView}/>
            <Route path="/detalle/:id" component={PlatoView}/>
            <Route path="/carrito" exact component={CarritoView}/>
            <Route path="/compra" exact component={CompraView}/>
            
        </div>
    )
}
