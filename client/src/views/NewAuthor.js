import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';

const NewAuthor = () => {
    const [author, setAuthor] = useState({
        name: "",
    });

    const changeHandler = e => {
        setAuthor({
            ...author,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', author)
            .then(response => {
                navigate("/")
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to="/">Home</Link>
            <p>Add a new author:</p>
            <AuthorForm
                changeHandler={ changeHandler }
                submitHandler={ submitHandler }
                author={ author }
                action="Submit"
            />
        </div>
    )

}

export default NewAuthor;