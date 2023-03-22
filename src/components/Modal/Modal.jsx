import { Component } from 'react';
import './Modal.css';

// export const Modal = ({ children }) => {
//   return (
//     <div className="overlay">
//       <div className="modal">{children}</div>
//     </div>
//   );
// };

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModalByESC);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalByESC);
  }

  closeModalByESC = evt => {
    if (evt.code === 'Escape') this.props.closeModal();
  };

  closeModalByClickBackDrop = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className="Overlay" onClick={this.closeModalByClickBackDrop}>
        <div className="Modal">{this.props.children}</div>
      </div>
    );
  }
}
