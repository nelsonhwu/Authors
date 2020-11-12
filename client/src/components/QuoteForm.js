import React from 'react';

const QuoteForm = props => {
    const { quote, changeHandler, submitHandler, action } = props;
    // console.log(changeHandler);
    return (
        <form onSubmit = { submitHandler }>
            <p>
                <label>Quote: </label><br />
                <input
                    type="text"
                    name="text" value={quote.text}
                    onChange = { changeHandler } />
            </p>
            <input type="submit" value={action} />
        </form>
    )
}

export default QuoteForm;