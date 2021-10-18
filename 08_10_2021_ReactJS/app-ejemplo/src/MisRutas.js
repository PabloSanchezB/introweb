/*En este archivo creamos todas las rutas que vamos a utilizar */

import React from 'react';
import { Route, Switch } from 'react-router-dom'; /*Importamos los componenetes de React Router */
import Inicio from './pages/Inicio'; /*Importamos desde una carpeta de componentes que hemos llamado paginas */
import Crear from './pages/Crear';

export default function MisRoutes(){ /*OJO!!! A como se crea y se exporta este componente en la misa linea... */
    return( /*Retornamos lar rutas que vamos a utilizar */
        <Switch> {/*El componente Switch nos permitira cambiar o alternar entre una pagina/componente y otro.
        Notese que en realidad no estamos cambiando de pagina, lo que hacemos es renderizar uno u otro
        componente cada vez que "navegamos" */}
            <Route exact path='/' component={Inicio}/> {/*Una ruta exact con su respectivo path y que renderizara 
            el componente Inicio */}
            <Route path='/crear-estudiante' component={Crear}/>
        </Switch>
    );
}
