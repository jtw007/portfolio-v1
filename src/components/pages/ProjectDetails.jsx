import { projectList } from "../../data/projectList";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
    const { slug } = useParams()
    const project = projectList.find((project) => project.slug === slug)
    return ( 
        <></>
     );
}
 
export default ProjectDetails;