import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Inicio from './paginas/Inicio/Inicio';
import Estamos from './paginas/Estamos/Estamos';
import Contacto from './paginas/Contacto/Contacto';
import Footer from './components/Footer/Footer';




function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Inicio />}></Route>
          <Route path='/estamos' element={<Estamos/>}></Route>
          <Route path='/contacto' element={<Contacto />}></Route>
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
