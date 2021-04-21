import React from 'react';

const UpvotesSection = ({ publicationName, upvotes, setPublicationInfo }) => {
    const upvotePublication = async () => {
        const result = await fetch(`/api/publication/${publicationName}/upvote`, {
            method: 'post',
        });
        const body = await result.json();
        setPublicationInfo(body);
    }
    return (
        <div id="upvotes-section">
            <p>Upvotes: {upvotes}</p>
            <button onClick={() => upvotePublication()}>Add</button>
        </div>
    );
}

export default UpvotesSection;