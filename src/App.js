import {
  Routes,
  Route,
  BrowserRouter as Router,
  Link 
} from 'react-router-dom'


// css file import
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css'

// components import
import NavBar from './components/NavBar.jsx'
function App() {
  return (
    <div className='body d-flex flex-column min-vh-100 m-auto'>
      <Router>
        <header className='header'>
          <NavBar />
        </header>
      </Router>
    </div>
  );
}

export default App;
