import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const PublicationsList = ({ publications }) => (
    <>
    {publications.map((publication, key) => (
        <Link className="publication-list-item" key={key} to={`/publication/${publication.name}`}>
            <h3>{publication.title}</h3>
            <p>{publication.content[0].substring(0, 150)}...</p>
            <ScrollToTop />
        </Link>
    ))}
    </>
);

export default PublicationsList;
