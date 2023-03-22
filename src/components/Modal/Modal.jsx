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
  componentDidMount(e) {
    window.addEventListener('keydown', this.closeModalByECS);
  }

  closeModalByECS = evt => {
    console.log('close Modal', evt);
  };

  render() {
    return (
      <div className="overlay">
        <div className="modal">{this.props.children}</div>
      </div>
    );
  }
}
