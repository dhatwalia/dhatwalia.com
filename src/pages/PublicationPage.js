import React from 'react';
import publicationContent from './publication-content';
import PublicationsList from '../components/PublicationsList';
import NotFoundPage from './NotFoundPage';

const PublicationPage = ({ match }) => {
    const name = match.params.name;
    const publication = publicationContent.find(publication => publication.name === name);

    if (!publication) return <NotFoundPage/>

    const otherPublications = publicationContent.filter(publication => publication.name !== name);


    return (
        <>
            <h1>{publication.title}</h1>
            <h4>Published on: {publication.date}</h4>
            {publication.content.map((paragraph, key) => (
                <div>
                    <p key={ key }>{ paragraph }</p>
                </div>
            ))}
            <a class="button" href={ publication.source } target="_blank">Source</a>
            <h3>Other Publications:</h3>
            <PublicationsList publications={ otherPublications } />
        </>
    );
};

export default PublicationPage;
