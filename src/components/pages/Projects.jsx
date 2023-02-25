import { projectList } from "../../data/projectList";
import { Link } from "react-router-dom";
import { useState } from 'react';

const Projects = () => {

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
                        // <Link to={`/${project.siteURL}`}>
                            <div className='container' key={`project-${idx}`}>
                                <img className='project-img' src={project.img} alt='' />
                                <div className='project-box'>
                                    <div className="project-overlay">
                                        <span className="project-name">
                                            {project.title}
                                        </span>
                                        <button className="projectbtn">
                                            Learn more
                                        </button>
                                    </div>
                                </div>
                            </div>
                        // </Link>
                    ) 
                })}
            </div>
        </div>
    );
}
 
export default Projects;