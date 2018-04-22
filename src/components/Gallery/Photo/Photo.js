import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Photo.css';

class Image extends Component {
    render () {
        let userName = '';
        let profileUrl = '';
        if(undefined !== this.props.image.owner.username){
            profileUrl = this.props.image.owner.profileurl._content;
            userName = this.props.image.owner.username._content;
        }

        return <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className={classes.Card}>
                    <img className={classes.CardContainer}src={this.props.image.url} onClick={this.props.selectImage} alt={this.props.image.url}/>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a href={profileUrl}>{userName}</a>
                        </h4>
                    </div>
                </div>
            </div>;
    }
}

Image.propTypes = {
    image: PropTypes.object.isRequired
};

export default Image;