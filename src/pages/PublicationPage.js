import React from 'react';
import publicationContent from './publication-content';
import PublicationsList from '../components/PublicationsList';
import NotFoundPage from './NotFoundPage';

const PublicationPage = ({ match }) => {
    const name = match.params.name;
    const publication = publicationContent.find(publication => publication.name === name);
    const otherPublications = publicationContent.filter(publication => publication.name !== name);

    if (!publication) return <NotFoundPage/>

    return (
        <>
            <h1>{publication.title}</h1>
            {publication.content.map((paragraph, key) => (
                <p key={ key }>{ paragraph }</p>
            ))}
            <PublicationsList publications={ otherPublications } />
        </>
    );
};

export default PublicationPage;
