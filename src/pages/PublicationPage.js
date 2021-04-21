import React, { useState, useEffect } from 'react';
import publicationContent from './publication-content';
import PublicationsList from '../components/PublicationsList';
import CommentsList from '../components/CommentsList';
import AddComment from '../components/AddComment';
import UpvotesSection from '../components/UpvotesSection';
import NotFoundPage from './NotFoundPage';

const PublicationPage = ({ match }) => {
    const name = match.params.name;
    const publication = publicationContent.find(publication => publication.name === name);
    
    const [publicationInfo, setPublicationInfo] = useState({upvotes: 0, comments : []});

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/publication/${name}`);
            const body = await result.json();
            setPublicationInfo(body);
        }
        fetchData();
    }, [name]);


    if (!publication) return <NotFoundPage/>

    const otherPublications = publicationContent.filter(publication => publication.name !== name);


    return (
        <>
            <h1>{publication.title}</h1>
            <UpvotesSection publicationName={name} upvotes={publicationInfo.upvotes} setPublicationInfo={setPublicationInfo} />
            {publication.content.map((paragraph, key) => (
                <p key={ key }>{ paragraph }</p>
            ))}
            <CommentsList comments={publicationInfo.comments} />
            <AddComment publicationName={name} setPublicationInfo={setPublicationInfo} />
            <h3>Other Publications:</h3>
            <PublicationsList publications={ otherPublications } />
        </>
    );
};

export default PublicationPage;
