import React from 'react';
import Photo from './Photo/Photo';
import classes from './Gallery.css';

const gallery = ( props ) => {
      let photos = Object.keys( props.images )
        .map( igKey => {
            return [...Array( props.images[igKey] )].map( ( _, i ) => {
                return <Photo 
                    key={igKey + i} 
                    image={props.images[igKey]}
                    selectImage = {() => props.openModalImage(props.images[igKey])}
                    />;
            } );
        }, 
        []);

    return (
        <div className={classes.Gallery}>
            {photos}
        </div>
    );
};

export default gallery;