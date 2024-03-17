import React from 'react';
import projectContent from '../content/project';
import ProjectList from '../components/ProjectList';

const ProjectListPage = () => (
    <>
        <div class="page-content">
            <h1>Projects</h1>
            <ProjectList project={projectContent} />
        </div>
    </>
);

export default ProjectListPage;
