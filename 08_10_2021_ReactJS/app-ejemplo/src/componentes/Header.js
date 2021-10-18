import React from "react";
import Row from 'react-bootstrap/Row' /*Importamos el componente Row de react-bootstrap*/
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom"; /*Segun nuestro diseño, nuestros links clickeables estan aqui en el 
Header */

const Header = () => {
    return (
        <Row>{/*Equivalente a <div className="row"> */}
            <Col className="py-5 text-center border"> {/* Equivalente a <div className="col py-5 text-center">*/}
                <h1>Gestión de Estudiantes</h1>
                <span>
                    <Link to='/'>Inicio</Link>/
                    <Link to='/crear-estudiante'>Crear</Link>/
                    Consultar/
                    Actualizar/
                    Eliminar
                </span>
                {/*Y asi creamos nuestros links cleckeables. Tenemos que pegar la ruta que definimos en
                MisRutas correspondiente al componente/pagina a la queremos ir al clickear. Notese que aqui
                no hay que importar MisRoutes */}
            </Col>
        </Row>
    );
}
/*OJO!! Al poner mas de un elemento html dentro de un jsx, nos dará el error de que "necesita un padre"
Para esto, ponemos un framing que encapsule los elementos. Un framing son los <></> vacios */

export default Header;

