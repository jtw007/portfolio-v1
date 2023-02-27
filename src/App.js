import {
  Routes,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom'


// css file import
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css'

// components/pages import
import Home from './components/pages/Home';
import NavBar from './components/NavBar.jsx'
import ProjectDetails from './components/pages/ProjectDetails';

function App() {
  return (
    <div className='app'>  
      <Router>
          <NavBar /> 
        <div className='routes'>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/:slug' element={ <ProjectDetails /> }/>
          </Routes>
        </div>
      </Router> 
      
      
    </div>
  );
}

export default App;
