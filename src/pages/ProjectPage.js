import React from 'react';
import projectContent from '../content/project';
import ProjectList from '../components/ProjectList';
import NotFoundPage from './NotFoundPage';

const ProjectPage = ({ match }) => {
    const name = match.params.name;
    const project = projectContent.find(project => project.name === name);

    if (!project) return <NotFoundPage/>

    const otherProject = projectContent.filter(project => project.name !== name);


    return (
        <>
            <h1>{project.title}</h1>
            <h4>Tech. Skills: {project.skills}</h4>
            {project.content.map((paragraph, key) => (
                <div>
                    <p key={ key }>{ paragraph }</p>
                </div>
            ))}
            <a class="button" href={ project.source } target="_blank">See project</a>
            <h3>Other Project:</h3>
            <ProjectList project={ otherProject } />
        </>
    );
};

export default ProjectPage;
