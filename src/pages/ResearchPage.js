import Button from '../components/Button';
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
                <h2>{research.title}</h2>
                <h4>Published on: {research.date}</h4>
                {research.content.map((paragraph, key) => (
                    <div>
                        <p key={key}>{paragraph}</p>
                    </div>
                ))}
                <Button href={research.source}>Source</Button>
                <h3>Other Research:</h3>
                <ResearchList research={otherResearch} />
            </div>
        </>
    );
};

export default ResearchPage;
