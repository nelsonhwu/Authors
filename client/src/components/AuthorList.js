import React, { useState } from 'react';
import axios from 'axios';
import { redirectTo, Link } from '@reach/router';
import DeleteButton from '../components/DeleteButton';


export default props => {
    // const redirectToEdit = author => {
    //     redirectTo(`/edit/${author._id}`)
    // }

    const deleteAuthor = authorId => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                props.removeFromDom(authorId)
            })
    }

    return (
        <div>
            {props.authors.map((author, index) => {
                return (
                    <p key={index}>
                        <Link to={`/authors/${author._id}`}>{author.name} </Link>
                        <Link to={`/edit/${author._id}`}><button>Edit</button></Link>
                        <DeleteButton onClick = { () => deleteAuthor(author._id) } />
                    </p>
            )})}
        </div>
    )
}