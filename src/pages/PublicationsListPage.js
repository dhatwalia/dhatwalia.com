import React from 'react';
import publicationContent from './publication-content';
import PublicationsList from '../components/PublicationsList';

const PublicationsListPage = () => (
    <>
        <h1>Publications</h1>
        <PublicationsList publications={publicationContent} />
    </>
);

export default PublicationsListPage;
