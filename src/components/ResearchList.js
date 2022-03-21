import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const ResearchList = ({ research }) => (
    <>
    {research.map((research, key) => (
        <Link className="list-item" key={key} to={`/research/${research.name}`}>
            <h3>{research.title}</h3>
            <p>{research.content[0].substring(0, 150)}...</p>
            <ScrollToTop />
        </Link>
    ))}
    </>
);

export default ResearchList;
