import React from 'react';
import researchContent from '../content/research';
import ResearchList from '../components/ResearchList';

const ResearchListPage = () => (
    <>
        <div class="page-content">
            <h1>Research</h1>
            <ResearchList research={researchContent} />
        </div>
    </>
);

export default ResearchListPage;
