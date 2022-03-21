import React from 'react';
import researchContent from '../content/research';
import ResearchList from '../components/ResearchList';

const ResearchListPage = () => (
    <>
        <h1>Research</h1>
        <ResearchList research={researchContent} />
    </>
);

export default ResearchListPage;
