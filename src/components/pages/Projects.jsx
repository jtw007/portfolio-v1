import { projectList } from "../../data/projectList";
import { Link } from "react-router-dom";
import { useState } from 'react';

const Projects = () => {
    const [ style, setStyle ] = useState({display: 'none'})
    
    const linkStyle = {
        textDecoration: 'none',
    }
    // const projectsArray = projectList?.map((project, idx) => {
    //     return(
    //         <div className='project-container' key={`project-${idx}`}>
    //             <img className='project-img' src={project.img} />
    //         </div>
    //     )
    // })

    return (

        <div className='' id='projects'>
            <h1 className='project-title'>Joshwu.Projects 💻</h1>
            <div className='project-container'>
                {projectList.map((project, idx) => {
                    return(
                        <Link key={`project-${idx}`} to={`/${project.slug}`} style={ linkStyle }>
                            <div id='container'>
                                <div id='test-container'>
                                    <img 
                                    // onMouseEnter={e => {
                                    //     setStyle({display: 'block'})
                                    // }}
                                    // onMouseLeave={e => {
                                    //     setStyle({display: 'none'})
                                    // }} 
                                    className='project-img' 
                                    src={project.img} 
                                    alt='' />
                                    <div className="project-overlay">
                                        <div className='project-overlay-container'>
                                            <span className="project-span" style={style}>
                                                {project.name}
                                            </span>
                                            <button className="projectbtn" style={style}>See more</button>
                                        </div>  
                                    </div>
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