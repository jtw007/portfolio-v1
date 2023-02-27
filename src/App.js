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
import ProjectDetails from './components/pages/ProjectDetails';

function App() {
  return (
    <div className='body'>
      <Router>
        <header className=''>
          <NavBar />
        </header>

          <About />

          <Projects />

          <Routes>
            {/* <Route path='/' /> */}
            <Route path='/:slug' element={ <ProjectDetails /> }/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
