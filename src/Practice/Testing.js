import React from 'react';

const Testing = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.datetime}</h2>
            <p>{props.slug}</p>
        </div>
    );
};

export default Testing;