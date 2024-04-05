import { Link } from 'react-router-dom';
import '../styles/List.css';
import ScrollToTop from './ScrollToTop';

interface Project {
    name: string;
    title: string;
    skills: string;
    content: string[];
    source: string;
}

interface ProjectListProps {
    projects: Project[];
}

const Projects = ({ projects }: ProjectListProps) => {
    return <>
        {projects.map((project, key) => (
            <Link className="list-item" key={key} to={`/project/${project.name}`}>
                <h3>{project.title}</h3>
                <p>{project.content[0].substring(0, 150)}...</p>
                <ScrollToTop />
            </Link>
        ))}
    </>;
};

export default Projects;
