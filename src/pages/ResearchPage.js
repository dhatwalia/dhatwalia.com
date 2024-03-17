import React from 'react';
import researchContent from '../content/research';
import ResearchList from '../components/ResearchList';
import NotFoundPage from './NotFoundPage';

const ResearchPage = ({ match }) => {
    const name = match.params.name;
    const research = researchContent.find(research => research.name === name);

    if (!research) return <NotFoundPage />

    const otherResearch = researchContent.filter(research => research.name !== name);


    return (
        <>
            <div class="page-content">
                <h1>{research.title}</h1>
                <h4>Published on: {research.date}</h4>
                {research.content.map((paragraph, key) => (
                    <div>
                        <p key={key}>{paragraph}</p>
                    </div>
                ))}
                <a class="button" href={research.source} target="_blank" rel="noreferrer">Source</a>
                <h3>Other Research:</h3>
                <ResearchList research={otherResearch} />
            </div>
        </>
    );
};

export default ResearchPage;
