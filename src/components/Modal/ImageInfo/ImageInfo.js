import React, { Component } from 'react';
import classes from './ImageInfo.css';

class ImageInfo extends Component {
    render () {
        let user = '';
        if(undefined !== this.props.data.owner){
            user = this.props.data.owner.username._content;
        }

        let divStyle = {
            backgroundImage: 'url(' + this.props.data.url + ')',
        };

        return <div className={classes.ImageInfoContainer}>
            <div className={classes.Title}>{user}
            </div>
            <div className={classes.ImageContainer}>
            <div className={classes.Image} style={divStyle}>
            </div>
            </div>
                <div className={classes.MoreInfo}>
                </div>  
            </div>;
    }
}

export default ImageInfo;