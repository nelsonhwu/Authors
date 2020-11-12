import React, { useState } from 'react';
import QuoteItem from './QuoteItem';
import axios from 'axios';

const QuoteList = props => {

    return (
        <div>
            {props.quotes.map((quote, index) => {
                return (
                    <QuoteItem 
                        quote = {quote}
                        key = {index}
                        removeFromDom = {props.removeFromDom}
                    />
                )
            })}
        </div>
    )
}

export default QuoteList;