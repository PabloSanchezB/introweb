/*Aqui creamos el formulario para agregar mas estudiantes a la lista */
/*Recordar que este formulario StudentForm es hijo de StudentList, se llama dentro de StudentList, y recibe una 
función desde StudentList (alEnviarForm), para poder enviarle información a StudentList (el nuevo estudiante 
    que se agregara a la lista). Toca entender bien esta maniobra entre una coleccion de objetos y el formulario que le
    crea nuevos objetos a esa coleccion.*/

import React, {useState} from "react";

export default function StudentForm(props){ /*OJO!! Aqui estamos deestructurando/desagregando las propiedades
    que recibe StudentForm. Igual hubieramos podido poner "props" en vez de "{agregar}" */
    /*Para los formlarios, siempre los vamos a crear con bootstrap (form y form control en la documentación de 
        bootstrap). Botones tambien de bootstrap */

    /*OJO!! Los nombres de los atributos en este objeto deben coincidir con los nombres de los atributos de los
    objetos que conforman el array studentsInitial en StudentList */
    const estadoInicialForm = {
        nombre: '',
        programa: '',
        semestre: ''
    };

    const [estadoForm, cambiarEstadoForm] = useState(estadoInicialForm);

    /*NOTESE: Que esta función esta siguiendo la misma logica del ejemplo del nombre del gato
    (Repositorio: introweb_React_Hooks_Ejemplo_Basico ), basicamente el campo se convierte en una especie de
    acumulador, que es igual a si mismo mas la ultima letra escrita */
    const gestionarCamposForm = event => { /*OJO!! esta función maneja un evento, porque se invoca cuando sucede un 
        evento, en este caso, un cambio en cualquiera de los campos del formulario (onChange). Un cambio: Escribir
        una letra. NOTESE!!! Que en este caso NO es necesario detener el evento por defecto....... */
        const nameInput = event.target.name;
        const valueInput = event.target.value;
        //const {name, value} = event.target; /*Esta desagregación hace exactamante lo mismo que las dos lineas
        /*de arriba, pero en ese caso, entonces la linea de abajo debe ser:
        cambiarEstadoForm({...estadoForm, [name]:value});*/
        cambiarEstadoForm({...estadoForm, [nameInput]:valueInput}); /*OJO!! Recordar que al hacer el spread de un
        objeto, si despues de un objeto espredeado agregamos un nuevo atributo que se llame igual que un atributo
        ya existente en el objeto espredeado, el nuevo atributo va a REEMPLAZAR el viejo atributo. */
    }

    const onSubmitForm = ev => { /*OJO!! esta función maneja un evento, porque se invoca cuando sucede un evento, en este
        caso, clickear un botón de enviar formulario (onSubmit) */
        ev.preventDefault(); /*OJO!!! Como siempre HAY QUE DETENER EL EVENTO POR DEFECTO */
        /*RULE OF THUMB: Por regla general, detener el evento por defecto solo es necesario en el caso de botones
        (onClick, onSubmit). Al parecer no es necesario hacerlo en un onChange (ver funcion arriba de esta) 
        En otros casos, detener el evento por defecto solo cuando NO se este obteniendo el comportamiento esperado*/
        props.agregar(estadoForm); /*Aqui estamos invocando la función alEnviarForm que definimos en StudentList,
        y que le hemos enviado a este componente (StudentForm) a traves de la propiedad agregar*/
        cambiarEstadoForm(estadoInicialForm); /*Esto se hace para que al enviar el formulario, todos los campos
        se pongan otra vez vacios */
    }

    return(
        <form onSubmit={onSubmitForm}> {/*Los formularios siempre van dentro de etiquetas form */}
        {/*OJO!!! "onSubmit" especifica lo que ocurre cuando se clickea el boton de enviar formulario (botón tipo
            "submit"). OJO!!! en vez de "{agregar}" hubiera podido haber puesto "props.agregar" en caso de haber usado
            "props" como argumento de StudentForm en la linea 5*/}
            {/*OJO!!! mb-3 form-label y form-control son clases de bootstrap. Ademas, en React/jsx la propiedad "for"
            es "htmlFor". TAMBIEN recordar que "class" es "className" */}
            <div className="mb-3">
                <label htmlFor="nameStudent" className="form-label">Nombre</label>
                <input type="text" class="form-control" id="nameStudent" 
                name="nombre" value={estadoForm.nombre} onChange={gestionarCamposForm} />
            </div>
            <div className="mb-3">
                <label htmlFor="program" className="form-label">Programa</label>
                <input type="text" class="form-control" id="program" 
                name="programa" value={estadoForm.programa} onChange={gestionarCamposForm} />
            </div>
            <div className="mb-3">
                <label htmlFor="semester" className="form-label">Semestre</label>
                <input type="text" className="form-control" id="semester" 
                name="semestre" value={estadoForm.semestre} onChange={gestionarCamposForm}/>
            </div>
            <div className="mb-3"> {/*OJO!!! En la docu de bootstrap, este div venia con class="col-12". 
            Primero, class es className en jsx. Segundo, en este componente no estamos trabajando con filas
            y columnas, asi que quitamos col-12 para poner mb-3, para que quede igual que los 3 elementos de
            arriba */}
            <button type="submit" className="btn btn-primary">Agregar Estudiante</button>
            </div>
      </form>
    );
}

