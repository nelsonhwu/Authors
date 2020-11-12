import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuoteList from '../components/QuoteList';
import { Link } from '@reach/router';

export default props => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + props.id)
            .then(res => {
                setAuthor(res.data)
                setQuotes(res.data.quotes)
                setLoaded(true);
            })
    }, [])

    const removeFromDom = quoteId => {
        setQuotes(quotes.filter(quote => quote._id !== quoteId));
    }

    return (
        <div>   
            <h1>{author.name}</h1>
            <Link to={`/write/${author._id}`}>Add new Quote</Link>
            {loaded && <QuoteList quotes={quotes} removeFromDom = { removeFromDom } />}
        </div>
    )
}