import React from 'react';
import Button from './Button/Button';

const navigation = ( props ) => {
    return (
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
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