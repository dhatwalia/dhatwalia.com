import projects from '../content/Projects';
import Projects from '../components/Projects';

const ProjectList = () => {
    return <div className="page-content">
        <h1>Projects</h1>
        <Projects projects={projects} />
    </div>;
};

export default ProjectList;
