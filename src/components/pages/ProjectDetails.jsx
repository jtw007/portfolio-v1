import { projectList } from "../../data/projectList";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
    const { slug } = useParams()
    const project = projectList.find((project) => project.slug === slug)

    function openSite() {
        window.open(project.siteURL)
    }

    function openGithub() {
        window.open(project.githubURL)
    }

    return ( 
        <div className='py-16'>
            <header className='py-10 px-14 md:px-7 bg-split-grey-top '>
                <div className=''>
                    <img 
                        src={project.img}
                        className='project-img'
                        alt='project image'
                    />
                    <div className=''>
                        <h1>
                            {project.title}
                        </h1>
                    </div>
                </div>
            </header>
        </div>
     );
}
 
export default ProjectDetails;