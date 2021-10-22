import React, {useState} from "react"; /*Aqui importamos el hook useState */
import StudentItem from "./StudentItem"; //Este es un componente que importa otro componente
/*Graficamente, el componenete StudentItem se muestra dentro del componenete StudentList, al igual que todos
los componentes se muestran dentro del componenete App */
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StudentForm from "./StudentForm"; //Importamos el formulario para agregar estudiantes

/*Y si queremos crear un formulario para agregar mas estudiantes a la lista? Mirar el componente StudentForm*/

const StudentList = () => {
    /*Entonces, necesitamos que al darle click al boton Agregar Estudiante del componente StudentForm se agregue un
    nuevo elemento a esta lista (students) */
    /*OJO!! Si students fuera CONSTANTE (const) NO PODRIAMOS agregarle mas elementos */
    /*OJO!!! students será ahora studentsInitial, porque vamos a utilizarlo con el hook useState. Ademas, ahora si
    puede ser constante, porque solo se usara una vez para darle el valor inicial a la variable de estado students*/
    const studentsInitial = [{id: 1, nombre: 'Alvaro', programa: 'Sistemas', semestre: 4},
                        {id: 2, nombre: 'Pedro', programa: 'Civil', semestre: 1},
                        {id: 3, nombre: 'Natalia', programa: 'Derecho', semestre: 8},
                        {id: 4, nombre: 'Luisa', programa: 'Medicina', semestre: 2},
                        {id: 5, nombre: 'Carlos', programa: 'Negocios', semestre: 6}]
    /*Notese que hasta este punto TODAVIA estamos usando javascript puro. El JSX empieza en la parte que parece
    HTML.... */
    const tuNombreFuncion = (nombre) => {
        console.log(nombre);
    }

    /*OJO!!! Ahora students es una variable de estado que manejara el array con la lista de estudiantes!!!*/
    const [students, setStudents] = useState(studentsInitial);

    /*OJO!!!! Todo el cuentico de pasarle esta función a StudentForm para agregar un nuevo estudiante NO VA A SERVIR
    REPITO: NO VA A SERVIR asi la logica este bien y basicamente ignorará las instrucciones, PORQUE la unica forma de 
    cambiar la información de un componente y de cambiar lo que se renderiza en pantalla ES CON VARIABLES DE ESTADO!!!!!!!!! */
    /*OJO!!! Ahora SI va a servir porque ahora students es una variable de estado. La lista de estudiantes ahora
    es una variable de estado y ahora si se podrá modificar la parte visual, lo que se renderiza en pantalla. 

    [[[[ EN OTRAS PALABRAS: students (la lista de estudiantes) es la variable de estado que controla el estado del 
    componente StudentList (Estado: Lo que se renderiza en pantalla) ]]]]]]]*/

    const alEnviarForm = (studentFromForm) => { /*OJO!! Esta funcion la tenemos que hacer aqui en StudentList, porque aqui es donde
        esta el array students */
        const idS = students.length + 1; /*Esto es para aumentar y asignar automaticamante el id al nuevo estudiante
        insertado */
        const newStudent = {id: idS, ...studentFromForm};
        /*OJO!!! Al malabar con SPREAD que estamos haciendo aqui. Basicamente, students funcionará como un 
        acumulador. Y OBLIGATORIAMENTE toca hacerlo asi, porque recuerda que la unica forma de cambiar la variable
        de estado es con la función especificada para ello, en este caso, setStudents. Yo no podria, por ejemplo,
        hacer students.push por fuera, y luego pasarle students a setStudents. Y tampoco funcionaria tu hipotesis
        de hacerle .push a studentsInitial (poniendola let en vez de const, por supuesto) y luego pasandosela 
        a setStudents. No se porque no funciona, pero asi es. */
        setStudents([...students, newStudent]);
    }

    return (
        <> {/*Recordar framings cuando sea necesario */}
        <Row>
            <StudentForm agregar={alEnviarForm} /> {/*Y aqui es donde zampamos nuestro formulario StudentForm */}
            {/*OJO!!! En StudentForm hemos definido la propiedad "agregar" y mediante esa propiedad le enviamos
            la función "alEnviarForm". Tenemos que enviarle la función a StudentForm porque en ese componente es
            donde esta el botón que envia el formulario con la info del nuevo estudiante a agregar al array students */}
        </Row>
        <Row className="border"> {/*OJO!! A este posicionamiento del Row y el Col */}
            <Col>
            {/*¿Como le paso a un componente hijo (StudentItem) la información desde un componente padre (StudentList)?
            Mediante atributos/propiedades en el compoenente hijo. Estos atributos/propiedades se le pueden
            poner cualquier nombre, el mas conveniente. Aqui elegimos "student".Se pueden poner tantas
            propiedades como se enecesiten a un mismo componeente. Todas llegaran en el parametro propiedades.. */
            
                students.map(estudiante => (/*OJO!!! Aqui faltaba este return!!! Todo codigo xls
                    TIENE que retornarse dentro de un parentesis. PERO OJO!!! Las funciones flecha pueden hacer
                    retornos directos: Si la unica linea de codigo es lo que se va a retornar, no hay necesidad
                    de poner llaves en la función. En este caso "la unica linea de codigo" o el retorno directo,
                    es el codigo xls dentro de parentesis.*/
                    <>
                        {/*OJO!!! Faltaba estos framings!!!*/}
                        <StudentItem key={estudiante.id} student={estudiante} funcion={tuNombreFuncion} /> 
                        {/*Recordar la forma de invocar los componentes importados... OJO!!! En las 
                        propiedades no solo podemos pasarle a los componenetes valores y objetos, sino 
                        TAMBIÉN FUNCIONES. NOTA: Aparentemente, cuando se hace una lista de compenentes hijos,
                        cada uno de estos debe llevar un identificador unico que se define en la propiedad "key"
                        Al profe le salio un error por no tenerlos, pero a mi no me salió ningun error...
                        Asi que no se que tan necesario sea hacer esto? Tenerlo en cuenta por si sale un error
                        en el futuro relacionado con esto... Notese que el profesor tuvo que quitar los
                        framings para que se quitara del todo el error usando lo del key....*/}
                    </>
                    )
                )
            
            /*Abrimos llaves para insertar codigo javascript dentro del div. Con una función map sobre
            el vector students asignamos cada uno de los estudiantes al atributo/propiedad student del
            componente StudentItem (¿Se crea un nuevo componenete StudentItem por cada iteración del
            map???). OJO!! Notese que la variable "estudiante" es codigo javascript, y por lo tanto también
            va dentro de llaves... */
            /*OJO!!! Al parecer esto no funcionó y el profe se desconectó sin terminar..... El error era que
            faltaban los framings. Como se esta creando un nuevo componenete StudentItem por cada iteración
            del map, hay varios componenetes seguidos (mas de uno) que necesitan un padre */}
            </Col>
        </Row>
        </>
    );
}

export default StudentList;