import React from 'react';
import Button from './Button/Button';

const navigation = ( props ) => {
    return (
        <div className="">
            <div className="">
            <Button
                text="Prev"
                clicked={props.prevPage}
            />
            <Button
                text="Next"
                clicked={props.nextPage}
            />
            </div>
        </div>
    );
};

export default navigation;