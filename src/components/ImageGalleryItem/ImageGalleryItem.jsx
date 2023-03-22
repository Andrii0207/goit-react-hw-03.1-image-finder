import './ImageGalleryItem.css';

export const ImageGalleryItem = ({ largeImage, webImage, tags, onClick }) => {
  return (
    <>
      <img
        className="ImageGalleryItemImage"
        src={webImage}
        alt={tags}
        onClick={() => onClick(largeImage)}
      />
    </>
  );
};
