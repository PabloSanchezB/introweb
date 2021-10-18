import React from "react";
import { Link } from "react-router-dom"; /*Importamos componente Link */
import StudentList from "../componentes/StudentList";

export default function Inicio(){ /*OJO!!! Esto no es "una función que se exporta", esto es un componente como
cualquier otro, solo que lo estamos creando con una función normal en vez de una función flecha y le estamos
haciendo el export default ahi mismo en vez de hacerlo en una instrucción aparte */
    return(
        <StudentList></StudentList> /*StudentList es lo que va a tener la pagina de inicio */
    );
}