import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AuthorForm = props => {
    const { author, changeHandler, submitHandler, action } = props;

    return (
        <form onSubmit = {submitHandler}>
            <p>
                <label>Name: </label><br />
                <input
                    type="text"
                    name="name" value={author.name}
                    onChange = { changeHandler } />
            </p>
            <input type="submit" value={action} />
        </form>
    )
}

export default AuthorForm;