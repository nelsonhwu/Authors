import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
import { Link } from '@reach/router';

export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res =>{
                setAuthors(res.data)
                setLoaded(true);
            });
    }, [])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }

    // const createAuthor = author => {
    //     axios,post('http://localhost:8000/api/authors', author)
    //         .then(res=> {
    //             setAuthors([...author, res.data]);
    //         })
    // }

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to="/new">Add an author</Link>
            <p>We have quotes by:</p>
            {/* <AuthorForm onSubmitProp={createAuthor} initialName="" /> */}
            {/* <hr/> */}
            {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom} />}
        </div>
    )
}