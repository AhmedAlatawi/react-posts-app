import React from 'react';

const post = (props) => (
    <div className="card" onClick={props.clicked}>
        <div className="container">
            <h4>
                <b>{props.title}</b>
            </h4>
            <p>{props.body}</p>
            <p>{props.author}</p>
        </div>
    </div>
);

export default post;