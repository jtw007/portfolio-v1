import {
  Routes,
  Route,
  BrowserRouter as Router,
  Link 
} from 'react-router-dom'
// components import
import NavBar from './components/NavBar.jsx'

// css file import
import './App.css';


function App() {
  return (
    <div className='placeholder'>
      <Router>
        <header>
          <NavBar />
        </header>
      </Router>
    </div>
  );
}

export default App;
