import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Candidatos from './Pages/Candidatos/Candidatos';
import Formulario from './Pages/Formulario/Formulario';
import Home from './Pages/Home/Home';


function App() {
  return (
    <Router>
      
      <header>
        <Link to="/"><button>Home</button></Link>
        <Link to="/candidatos"><button>Candidatos</button></Link>
        <Link to="/formulario"><button>Formulario</button></Link>
      </header>
      <main>
        <Routes>        
          <Route path="/" element={<Home/>}/>
          <Route exact path="/candidatos" element={<Candidatos/>}/>
          <Route exact path="/formulario" element={<Formulario/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
