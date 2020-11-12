import React from 'react';
import axios from 'axios'

const EditButton = props => {
    const { authorId, successCallback } = props;
    const updateAuthor = e => {
        axios.patch('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                successCallback();
            })
    }

    return (
        <button onClick={updateAuthor}>Edit</button>
    )
}

export default EditButton;