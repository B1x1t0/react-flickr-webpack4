import React from 'react';

const button = ( props ) => {
    return (
        <button type="button" className="btn btn-primary" onClick={props.clicked}>{props.text}</button>
    );
};

export default button;