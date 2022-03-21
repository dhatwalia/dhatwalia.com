import React from 'react';
import projectContent from '../content/project';
import ProjectList from '../components/ProjectList';

const ProjectListPage = () => (
    <>
        <h1>Projects</h1>
        <ProjectList project={projectContent} />
    </>
);

export default ProjectListPage;
