import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
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
    page: 1,
  };

  notify = () => toast('Wow so easy!');

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      searchImages(query, page)
        .then(resp => resp.json())
        .then(resp => {
          if (resp.hits.length === 0) {
            toast.error("We've found no images");
          }
          this.setState(prevState => ({
            images: [...prevState.images, ...resp.hits],
            // toast.success("We've found XXX images")
          }));
        });
    }
  }

  handleSubmit = value => {
    this.setState({ query: value, page: 1, images: [] });
  };

  clickImage = selectImage => {
    this.setState({ largeImage: selectImage });
  };

  closeModal = () => {
    this.setState({
      largeImage: null,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
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
          <Toaster
            duration={2000}
            style={{ background: '#dd1717', color: '#1f24ac' }}
            position={'right-top'}
          />
          <Searchbar onSubmit={this.handleSubmit} />
        </div>
        <div>
          <ImageGallery images={images} clickImage={this.clickImage} />
          {images.length % 12 === 0 && images.length !== 0 && <Button onClick={this.loadMore} />}
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
