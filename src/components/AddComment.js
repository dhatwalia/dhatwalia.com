import React, { useState } from 'react';

const AddComment = ({ publicationName, setPublicationInfo }) => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        const result = await fetch(`/api/publication/${publicationName}/add-comment`, {
            method: 'post',
            body: JSON.stringify({ username, text: commentText }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await result.json();
        setPublicationInfo(body);
        setUsername('');
        setCommentText('');
    }

    return (
        <div id="add-comment-form">
            <h3>Add a Comment</h3>
            <label>
                Name:
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
            </label>
            <label>
                Comment:
                <textarea rows="4" cols="50" value={commentText} onChange={(event) => setCommentText(event.target.value)} />
            </label>
            <button onClick={() => addComment()}>Add Comment</button>
        </div>
    );
}

export default AddComment;
