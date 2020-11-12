import React, { useState, useEffect } from 'react';
import DeleteButton from '../components/DeleteButton';
import axios from 'axios';

const QuoteItem = ({removeFromDom, quote}) => {
    const [vote, setVote] = useState();

    useEffect(() => {
        setVote(quote.vote);
    }, [quote.vote])

    const deleteQuote = quoteId => {
        axios.patch('http://localhost:8000/api/quotes/' + quoteId)
            .then(res => {
                removeFromDom(quoteId)
            })
    }

    const voteUp = () => {
        setVote(vote+1)
    }

    const voteDown = () => {
        setVote(vote-1)
    }

    return (
        <p>
            {quote.text}
            {vote}
            <button onClick ={ () => voteUp()}>Vote Up</button>
            <button onClick = { () => voteDown() }>Vote Down</button>
            <DeleteButton onClick = { () => deleteQuote(quote._id) } />
        </p>
    )
}

export default QuoteItem;