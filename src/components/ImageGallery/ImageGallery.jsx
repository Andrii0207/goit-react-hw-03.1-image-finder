import { ImageGalleryItem } from '../ImageGalleryItem';
import './ImageGallery.css';

export const ImageGallery = ({ images, clickImage }) => {
  return (
    <ul className="ImageGallery">
      {images.map(item => (
        <li className="ImageGalleryItem" key={item.id}>
          <ImageGalleryItem
            largeImage={item.largeImageURL}
            webImage={item.webformatURL}
            alt={item.tags}
            onClick={clickImage}
          />
        </li>
      ))}
    </ul>
  );
};
