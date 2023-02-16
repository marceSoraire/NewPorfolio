import './App.css';
// import { Routes, Route } from 'react-router-dom';

// Componentes
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

// views 
import Sobremi from './views/SobreMi/Sobremi';
import Herramientas from './views/Herramientas/Herramientas';
import Proyectos from './views/Proyectos/Proyectos';
import Contactos from './views/Contactos/Contactos';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Nav/>
      <Main/>
      <Sobremi/>
      <Herramientas/>
      <Proyectos/>
      <Contactos/>
      {/* <Routes>
        <Route path='/sobremi' element={<Sobremi/>}></Route>
        <Route path='/herramientas' element={<Herramientas/>}></Route>
        <Route path='/proyectos' element={<Proyectos/>}></Route>
      </Routes> */}
      <Footer/>
    </div>
  );
}

export default App;
