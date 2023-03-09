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
        <div className='details'>
            {/* header start */}
            <header className='details-header'>
                <div className='details-container'>
                    <img 
                        src={project.img}
                        className='details-project-img'
                        alt='project image'
                    />
                    <div className='project-details'>
                        <h1 className='details-name'>
                            {project.name}
                        </h1>

                        <div className='details-header-container'>
                            <h2 className="details-subheader">
                                {project.subheader}
                            </h2>

                            <div className="detailsbtn-container">
                                <button 
                                    className='detailsbtn'
                                    onClick={() => openSite()}
                                >
                                    Deployed Site
                                </button>

                                <button 
                                    className='detailsbtn'
                                    onClick={() => openGithub()}
                                >
                                    Github Repo
                                </button>
                            </div>

                        </div>

                    </div>

                </div>
            </header>
            {/* header end */}
            <div className='details-bottom'>
                <h3 className='details-built'>
                    Built with
                </h3>
                <ul className='details-ul'>
                    <li className='details-li' key={`project`}>
                        <span className='details-stacks'>
                            {project.stacks.toString().split(',').join(', ')} 
                        </span>
                    </li>
                </ul>
                <p className='details-desc'>
                    {project.desc}
                </p>
            </div>
        </div>
     );
}
 
export default ProjectDetails;