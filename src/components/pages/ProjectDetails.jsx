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
            <header>
                
            </header>
        </div>
     );
}
 
export default ProjectDetails;