import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const ProjectList = ({ project }) => (
    <>
    {project.map((project, key) => (
        <Link className="list-item" key={key} to={`/project/${project.name}`}>
            <h3>{project.title}</h3>
            <p>{project.content[0].substring(0, 150)}...</p>
            <ScrollToTop />
        </Link>
    ))}
    </>
);

export default ProjectList;
