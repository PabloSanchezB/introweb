import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button' /*Importamos botones */
import '../css/misestilos.css' /*OJO!! A como se importa una hoja de estilos css en React*/

//La idea es que en el parametro propiedades se reciben los atributos/propiedades que declaramos para el componente
//StudentItem en StudentList, y por lo tanto, ya podemos usar los valores de la propiedad student dentro de
//StudentItem
const StudentItem = (propiedades) => {
    const {nombre, programa, semestre} = propiedades.student; //Esto es lo que se conoce como deestructurar un objeto
    
    const controlarClick = (ev) => { //Función dentro de este mismo componente (StudentItem)
        ev.preventDefault(); //Detiene el evento por defecto
        console.log(nombre);
    }
    
    return (
        <div className="item">
        <Row>
            <Col md={1} sm={1}> {/*Aqui "2" es codigo JS, por eso va dentro de llaves. La expresión seria
            equivalente a <div className="col-md-2 col-sm-2"> */}
                <img className="avatar" alt="imag" src="https://www.bootdey.com/img/Content/avatar/avatar7.png" />
            </Col>
            <Col md={8} sm={8}>
                <h5>{nombre}</h5>
                <p>{programa}</p>
                <p className="text-muted">{semestre}</p> {/*Texto muteado */}
            </Col>
            <Col md={3} sm={3}>
                <Button variant="primary" size="sm"
                onClick={ev => propiedades.funcion(nombre)}>Ver detalles</Button> {/*Componenete boton de react-bootstrap
                Recordar siempre el onClick para botones!!! OJO!! A como se invoca la función que le pasamos
                al componente... OJO!!! En React el onClick y la función estan controlados por EVENTOS.
                Aqui si no le decimos nada, el onClick va a estar controlado por un evento por defecto.
                Ahora al onClick le pasamos la función que controla el evento.
                1- onClick={controlarClick} = Este caso se usa cuando el evento (En este caso el click del
                    boton) invoca una función creada dentro del mismo componente, a diferencia del siguente
                    caso, en el que el evento invoca una función recibida desde un componente padre.
                2- onClick={ev => propiedades.funcion(nombre)} = Aqui "ev" hace referencia al onClick. (El 
                click del boton es el evento). Y al recibirse como parametro, hace que se invoque la
                función tuNombreFuncion que le habiamos pasado como propiedad al componente StudentItem.
                Basicamente, le decimos que al clickear el boton invoque a tuNombreFuncion. Notese que en
                esta forma de manejar el evento
                estamos invocando una función venida desde el padre (StudentList)
                NOTESE!!!! Que hasta ahora para lo unico que hemos usado manejo de eventos es para hacerle un
                "override" al evento por defecto (O sea, detenerlo).*/}
            </Col>
        </Row>
        </div>
    );
}

export default StudentItem;