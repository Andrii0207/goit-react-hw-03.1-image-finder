import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { searchImages } from '../service/pixabay_api';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    query: '',
    images: [],
    largeImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('UPDATE');

    if (prevState.query !== this.state.query) {
      searchImages(this.state.query)
        .then(resp => resp.json())
        .then(resp => this.setState({ images: resp.hits }));
    }
    console.log('STATE', this.state.images);
  }

  handleSubmit = value => {
    this.setState({ query: value });
  };

  clickImage = selectImage => {
    this.setState({ largeImage: selectImage });
  };

  closeModal = () => {
    this.setState({
      largeImage: null,
    });
  };

  render() {
    const { images, largeImage, selectedImage } = this.state;

    return (
      <div
        style={{
          // height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'top',
          // fontSize: 40,
          // color: '#010101',
          display: 'grid',
          gridTemplateColums: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <div>
          <Searchbar onSubmit={this.handleSubmit} />
        </div>
        <div>
          <ImageGallery images={images} clickImage={this.clickImage} />
          {images.length % 12 === 0 && images.length !== 0 && <Button />}
        </div>
        <div>
          {largeImage !== null && (
            <Modal largeImage={selectedImage} closeModal={this.closeModal}>
              <img src={largeImage} alt={largeImage} />
            </Modal>
          )}
        </div>
      </div>
    );
  }
}

//  display: grid;
//   grid-template-columns: 1fr;
//   grid-gap: 16px;
//   padding-bottom: 24px;
