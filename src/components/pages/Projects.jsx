import { projectList } from "../../data/projectList";
import { Link } from "react-router-dom";
import { useState } from 'react';

const Projects = () => {

    const [ style, setStyle ] = useState({})
    
    
    const linkStyle = {
        textDecoration: 'none',
    }

    return (

        <div className='' id='projects'>
            <h1 className='project-title'>Joshwu.Projects 💻</h1>
            <div className='project-container'>
                {projectList.map((project, idx) => {
                    // console.log('style:', style)
                    return(
                        <Link key={`project-${idx}`} to={`/${project.slug}`} style={ linkStyle }>
                            <div id='container'>
                                <img 
                                onMouseEnter={e => {
                                    setStyle({display: 'block'})
                                    // console.log('Mouse entered')
                                }}
                                onMouseLeave={e => {
                                    setStyle({display: 'none'})
                                    // console.log('Mouse left')
                                }} 
                                className='project-img' 
                                src={project.img} 
                                alt='' />
                                    <div className='project-overlay-container'>
                                        <span className="project-span" style={style}>
                                            {project.name}
                                        </span>
                                        <button className="projectbtn" style={style}>See more</button>
                                    </div>  
                            </div>
                        </Link>
                            
                    ) 
                })}
            </div>
        </div>
    );
}
 
export default Projects;