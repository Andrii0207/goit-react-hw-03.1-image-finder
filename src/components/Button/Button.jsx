import './Button.css';

export const Button = ({ onClick }) => {
  return (
    <button type="button" className="Button" onClick={onClick}>
      Load More
    </button>
  );
};
