/*import logo from './logo.svg'; /*Aqui es donde se importan los componentes o modulos desde una ruta especifica */
import './App.css'; /*Aqui se importan .css, modulos .js, etc. */
import Footer from './componentes/Footer'; /*Y asi importamos los componentes que hemos creado */
import Header from './componentes/Header';
/*import StudentList from './componentes/StudentList'; OJO!! Ya no importamos StudentList, sino que este es devuelto
por el componente ("pagina") Inicio, el cual se le pasa como propiedad al componente Route que a su vez es devuelto
por el componente MisRoutes*/
import Container from 'react-bootstrap/Container'; /*Importamos bootstrap container */
import {BrowserRouter as Router} from 'react-router-dom'; /*Importamos el browser router despues de haber insta
lado el react router dom. OJO!!! El componente lo invocamos como "Router" porque ese es el alias que le hemos
puesto ("as Router"). Pero podemos ponerle el alias que queramos. Si no le ponemos alias, tendremos que 
invocarlo como "BrowserRouter" */
import MisRoutes from './MisRutas'; /*Importamos las rutas */

/*OJO!!! Cada vez que hacemos cambios aqui, debemos ir a la consola y en el folder de la app hacer "npm start" 
lo que hará que se abra de nuevo el localhost 3000 y se muestre la pagina actualizada en el browser...*/

function App() {
  return (
    <Container fluid> {/*OJO!! Dentro del codigo JSX, el codigo javascript puro debe ir dentro de llaves!!
    Este comentario es javascript puro. AHORA SI: Dentro de este div className="App" es donde va todo el
    codigo de los componenetes visuales de nuestra pagina como tal, es decir, 
    lo qye se va a mostrar en el browser. Este es el componente visual que cubre TODA la pantalla.
    Dentro del lenguaje JSX, el "className" reemplaza al "class" del html puro. OJO!! <Container fluid> y
    su cierre seria equvalente a <div className="container-fluid"> y su cierre*/}

    <Router> {/*El componente Router, que permite guardar el historial de navegación. OJO!! a como va dentro
    del container principal... */}
      <Header />
      <MisRoutes /> {/*OJO!!! Notese que aqui ya no va StudentList sino MisRoutes. StudentList ahora es una
      de las varias "paginas" entre las cuales vamos a "navegar" o alternar. Notese que Header y Footer
      permanecen, ya que estos dos componentes van a permanecer constantes entre las diferentes "paginas"
      (se van a mostar iguales en todas ellas) */}
      <Footer /> {/*Y asi se invocan los compoenentes dentro del div App*/}
    </Router>

      {/*<header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" /> Comentarizando esto quitamos el logo...
        <p>
          {/*Edit <code>src/App.js</code> and save to reload.*
          Mi primera aplicación en ReactJS
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
    </Container>
  );
}

export default App;
