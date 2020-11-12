import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import QuoteForm from '../components/QuoteForm';

const NewQuote = props => {
    const { id } = props;
    const [ quote, setQuote ] = useState({
        text: "",
    });

    const changeHandler = e => {
        setQuote({
            ...quote,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = e => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/authors/${id}/quote`, quote)
            .then(response => {
                navigate(`/authors/${id}`)
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Quotes</h1>
            <Link to="/">Home</Link>
            <p>Provide a quote by :</p>
            <QuoteForm 
                changeHandler = { changeHandler }
                submitHandler = { submitHandler }
                quote= { quote }
                action="Submit"
            />
        </div>
    )
}

export default NewQuote;