import Button from '../components/Button';
import projects from '../content/Projects';
import Projects from '../components/Projects';
import NotFound from './404';
import { useParams } from 'react-router-dom';

const Project = () => {
    const { name } = useParams();
    const project = projects.find(project => project.name === name);

    if (!project) return <NotFound />

    const otherProjects = projects.filter(project => project.name !== name);

    return <div className="page-content">
        <h2>{project.title}</h2>
        <h4>Tech. Skills: {project.skills}</h4>
        {project.content.map((paragraph, key) => (
            <div>
                <p key={key}>{paragraph}</p>
            </div>
        ))}
        <Button href={project.source}>See project</Button>
        <h3>Other Project:</h3>
        <Projects projects={otherProjects} />
    </div>;
};

export default Project;
