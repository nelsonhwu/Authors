import React from 'react';
import axios from 'axios';

const DeleteButton = props => {
    const { onClick } = props;

    return (
        <button onClick={onClick}>Delete</button>
    )
}

export default DeleteButton;