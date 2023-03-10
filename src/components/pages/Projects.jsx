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
            <h1 className='project-title'>JoshWu.Projects 💻</h1>
            <div className='project-container'>
                {projectList.map((project, idx) => {
                    return(
                        <Link key={`project-${idx}`} to={`/${project.slug}`} style={ linkStyle }>
                            <div id='container' 
                                style={{backgroundImage: `url(${project.img})`}}
                                onMouseEnter={e => {
                                    setStyle({display: 'block'})
                                }}
                                onMouseLeave={e => {
                                    setStyle({display: 'none'})
                                }} 
                            >
                                <span className="project-span" style={style}>
                                    {project.name}
                                </span>
                            </div>
                        </Link>   
                    ) 
                })}
            </div>
        </div>
    );
}
 
export default Projects;