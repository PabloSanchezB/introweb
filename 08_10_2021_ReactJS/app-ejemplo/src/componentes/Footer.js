/*Para cada componente, se crea su propio archivo .js. Todos los componentes se ubican usualmente en su propia 
carpeta (componentes) */

import React from "react"; //Importamos React
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
    return(
        <Row className="border">
            <Col>
                <p>Copyright 2021</p>
            </Col>
        </Row>
    );
}

//Otra forma de hacer lo mismo de arriba (clase en vez de función)
/*class Footer2 extends React.Component{
    render(){//render es funcion dentro de React.Component
        return <footer>Segundo pie de página</footer>;
    }
}*/

//Otra forma, tambien con función
/*function Footer3(){
    return <footer>Tercer pie de página</footer>
}*/

export default Footer; //Para poder usar este componente, hay que exportarlo (Esquema default)
//Al parecer no se puede exportar mas de un componente????????

