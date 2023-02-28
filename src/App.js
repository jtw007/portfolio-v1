import {
  Routes,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom'


// css file import
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './index.css'
import './index2.css'
import './mobile.css'

// components/pages import
import Home from './components/pages/Home';
import NavBar from './components/NavBar.jsx'
import ProjectDetails from './components/pages/ProjectDetails';
import Footer from './components/Footer'

function App() {
  return (
    <div className='body'>  
      <Router>
          <NavBar /> 
        <div className='routes'>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/:slug' element={ <ProjectDetails /> }/>
          </Routes>
        </div>
          <Footer />
      </Router> 
      
      
    </div>
  );
}

export default App;
