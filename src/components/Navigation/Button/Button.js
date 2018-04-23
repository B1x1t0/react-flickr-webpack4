import React from 'react';

const button = ( props ) => {
    return (
        <button type="button" className="" onClick={props.clicked}>{props.text}</button>
    );
};

export default button;