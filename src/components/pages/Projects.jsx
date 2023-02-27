import { projectList } from "../../data/projectList";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

const Projects = () => {
    const [ style, setStyle ] = useState({display: 'none'})
    
    const linkStyle = {
        textDecoration: 'none',
    }

    const navigate = useNavigate()
    // const projectsArray = projectList?.map((project, idx) => {
    //     return(
    //         <div className='project-container' key={`project-${idx}`}>
    //             <img className='project-img' src={project.img} />
    //         </div>
    //     )
    // })

    return (

        <div className='' id='projects'>
            <h1 className='project-title'>Projects 💻</h1>
            <div className='project-container'>
                {projectList.map((project, idx) => {
                    return(
                        <Link to={`/${project.slug}`} style={ linkStyle }>
                            <div 
                                id='container' 
                                key={`project-${idx}`}
                                onMouseEnter={e => {
                                    setStyle({display: 'block'})
                                }}
                                onMouseLeave={e => {
                                    setStyle({display: 'none'})
                                }} 
                            >
                                <div id='test-container'>
                                    <img className='project-img' src={project.img} alt='' />
                                    <div 
                                        className="project-overlay">
                                        <span className="project-span" style={style}>
                                            {project.name}
                                        </span>
                                        <span className="project-span" style={style}>
                                            Description: {project.desc}
                                        </span>
                                        <button 
                                        className="projectbtn" 
                                        style={style}
                                        // onClick={navigate(`/${project.slug}`)}
                                        >
                                            See more
                                        </button>
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