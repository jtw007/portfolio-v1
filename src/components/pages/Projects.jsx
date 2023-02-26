import { projectList } from "../../data/projectList";
import { Link } from "react-router-dom";
import { useState } from 'react';

const Projects = () => {
    const [ style, setStyle ] = useState({display: 'none'})
    // const projectsArray = projectList?.map((project, idx) => {
    //     return(
    //         <div className='project-container' key={`project-${idx}`}>
    //             <img className='project-img' src={project.img} />
    //         </div>
    //     )
    // })

    return (

        // <div className='projects'>
        //     <h1 className='project-title'>Projects 💻</h1>
        //     <div id='project-section'>
        //         {projectsArray} 
        //     </div>
        // </div>

        <div className='' id='projects'>
            <h1 className='project-title'>Projects 💻</h1>
            <div className='project-container'>
                {projectList.map((project, idx) => {
                    return(
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
                                    <span className="project-name" style={style}>
                                        {project.name}
                                    </span>
                                    <button className="projectbtn" style={style}>
                                        See more
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) 
                })}
            </div>
        </div>
    );
}
 
export default Projects;