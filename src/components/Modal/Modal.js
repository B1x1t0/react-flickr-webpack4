import React, { Component } from 'react';
import classes from './Modal.css'
import ImageInfo from './ImageInfo/ImageInfo';


class Modal extends Component {
    render () {
        let image = '';

        if(this.props.show){
            image =  (<ImageInfo data={this.props.imageData}></ImageInfo>)
        }

        return (
            <div className={classes.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}
                onClick={this.props.hide}
            >
            <div className={classes.Close} onClick={this.props.hide}>Close</div>
            {image}
        </div>
    )
    };
};

export default Modal;