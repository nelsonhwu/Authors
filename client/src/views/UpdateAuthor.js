import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link , navigate } from '@reach/router';
import AuthorForm from '../components/AuthorForm';

const UpdateAuthor = props => {
    const { id } = props;
    const [author, setAuthor] = useState({name: ""});
    // const [errors, setErrors] = useState({name: ""});

    const changeHandler = e => {
        setAuthor({
            ...author, 
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = e => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/authors/${id}`, author)
            .then(response=> {
                navigate("/");
            })
            .catch(err => console.log(err));
    }

    // useEffect(() => {
    //     axios.get(`http://localhost:8000/api/authors/${id}`)
    //         .then(response => {
    //             console.log(response.data);
    //             if(response.data.message === "error") {
    //                 navigate("/");
    //             } else {
    //                 setAuthor(response.data.data);
    //             }
    //         })
    //         .catch(err => console.log(err));
    // }, [id])

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to="/">Home</Link>
            <p>Edit this author</p>
            <AuthorForm
                changeHandler={ changeHandler }
                submitHandler={ submitHandler }
                author={ author }
                action="Submit"
            />
        </div>
    )

}

export default UpdateAuthor;