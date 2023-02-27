import NavBar from "../NavBar";
import About from "./About";
import Projects from "./Projects";


const Home = () => {
    return ( 
        <div className='body'>
            <NavBar />
            <About /> 
            <Projects /> 
        </div>
        
     );
}
 
export default Home;