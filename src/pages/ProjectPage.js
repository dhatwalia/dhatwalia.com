import Button from '../components/Button';
import React from 'react';
import projectContent from '../content/projects';
import ProjectList from '../components/ProjectList';
import NotFoundPage from './NotFoundPage';

const ProjectPage = ({ match }) => {
    const name = match.params.name;
    const project = projectContent.find(project => project.name === name);

    if (!project) return <NotFoundPage />

    const otherProject = projectContent.filter(project => project.name !== name);


    return (
        <>
            <div class="page-content">
                <h2>{project.title}</h2>
                <h4>Tech. Skills: {project.skills}</h4>
                {project.content.map((paragraph, key) => (
                    <div>
                        <p key={key}>{paragraph}</p>
                    </div>
                ))}
                <Button href={project.source}>See project</Button>
                <h3>Other Project:</h3>
                <ProjectList project={otherProject} />
            </div>
        </>
    );
};

export default ProjectPage;
