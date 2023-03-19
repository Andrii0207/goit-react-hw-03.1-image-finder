import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { searchImages } from '../service/pixabay_api';

export class App extends Component {
  state = {
    query: '',
  };

  componentDidMount() {
    console.log('MOUNT');
    // searchImages()
    //   .then(resp => resp.json())
    //   .then(resp => this.setState({ query: }));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('UPDATE');
    console.log('current state:', this.state.query);
    searchImages(this.state.query)
      .then(resp => resp.json())
      .then(resp => console.log(resp));
  }

  handleSubmit = value => {
    this.setState({ query: value });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          // alignItems: 'top',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery />
      </div>
    );
  }
}
