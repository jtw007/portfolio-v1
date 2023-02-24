import { projectList } from "../../data/projectList";
import { Link } from "react-router-dom";

const Projects = () => {
    const projectsArray = projectList?.map((project, idx) => {
                    return(
                        <div className='project-container' key={`project-${idx}`}>
                            <img className='project-img' src={project.img} />
                        </div>
                    )
                })
    return (

        <div className='projects'>
            <h1 className='project-title'>Projects 💻</h1>
            <div id='project-section'>
                {projectsArray} 
            </div>
            
            

        </div>
    );
}
 
export default Projects;