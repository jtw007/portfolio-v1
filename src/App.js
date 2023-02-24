import {
  Routes,
  Route,
  BrowserRouter as Router,
  Link 
} from 'react-router-dom'


// css file import
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css'

// components import
import NavBar from './components/NavBar.jsx'
import About from './components/pages/About';
import Projects from './components/pages/Projects';

function App() {
  return (
    <div className='body'>
      <Router>
        <header>
          <NavBar />
        </header>

          <About />

          <Projects />
      </Router>
    </div>
  );
}

export default App;
