import React, { Component } from 'react';
import Gallery from '../../components/Gallery/Gallery';
import Modal from '../../components/Modal/Modal';
import config from '../../config/config';
import Navigation from '../../components/Navigation/Navigation';
import Loading from '../../components/Loading/Loading';

const API_ENDPOINT_USER = `https://api.flickr.com/services/rest/?method=flickr.people.getInfo&api_key=${config.API_KEY}&format=json&nojsoncallback=1&user_id=`;
const API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${config.API_KEY}&format=json&nojsoncallback=1&per_page=16`;

class AppContainer extends Component {
    state = {
        category: '',
        selectedImage: {},
        images: {},
        openModal: false,
        page: 1,
        loding: true
    }

    getNewPhotosByPage = () => {
        this.setState({
            loading: true
        })
        let url = `${API_ENDPOINT}&page=${this.state.page}`;
        console.log(url);
        fetch(url)
        .then((response) => {
            return response.json().then((json) => {
                let images = json.photos.photo.map(({farm, server, id, secret, owner, title}) => {
                    return {
                        url: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`,
                        owner,
                        title: title
                    }
              });

              this.setState({images, selectedImage: images[0]});
            })
        })
        .then(() => {
            this.state.images.map((image) => {
            var images = [...this.state.images]
            var url = `${API_ENDPOINT_USER}${image.owner}`;
                fetch(url)
                    .then((response)=>{
                        return response.json().then((json) => {
                            image.owner = json.person;
                            this.setState({images: images});
                        })   
                    })
                    .catch(() => {
                    })
            });
            this.setState({
                loading: false
            })
        })
        .catch(() => {
            console.log("error loading images");
            this.setState({
                loading: false
            })
        })
    }

    getPhotoInformation = () => {
        
            this.setState({
                loading: true
            })
            let url = `${API_ENDPOINT}&page=${this.state.page}`;
            console.log(url);
            fetch(url)
            .then((response) => {
                return response.json().then((json) => {
                    let images = json.photos.photo.map(({farm, server, id, secret, owner, title}) => {
                        return {
                            url: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`,
                            owner,
                            title: title
                        }
                  });
    
                  this.setState({images, selectedImage: images[0]});
                })
            })
            .catch(() => {
                console.log("error loading info");

            })
        
    }

    componentDidMount () {
        this.getNewPhotosByPage();
    }
   

    changeCategoryHandler = () => {
        this.setState( { purchasing: true } );
    }

    openModalImageHandler = (image) => {
        this.setState({
            selectedImage: image,
            openModal: true
        });
    }

    closeModalImageHandler = () => {
         this.setState({
            openModal: false
        }) 
    } 

    nextPageHandler = () => {
        let page = ++this.state.page;
        this.setState({
            page: page
        })
        this.getNewPhotosByPage();
    }

    prevPageHandler = () => {
        let page = --this.state.page;
        this.setState({
            page: page
        })
        this.getNewPhotosByPage();
    }

    render () {
        var gallery, loading = null;

        if ( !this.state.loading ) {
            gallery = (
                    <Gallery images={this.state.images} openModalImage={this.openModalImageHandler}/>
            );
        }

        if ( this.state.loading ) {
            loading = <Loading />;
        }
        
        return (
            <div className="container">
            <Navigation
                nextPage={this.nextPageHandler}
                prevPage={this.prevPageHandler}
            />
            {loading}
            {gallery}
            <Modal 
                        show={this.state.openModal}
                        hide={this.closeModalImageHandler}
                        imageData={this.state.selectedImage}
                    />
            </div>
        );
    }
}

export default AppContainer;