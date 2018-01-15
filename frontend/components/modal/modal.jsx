import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal');
class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.el = document.createElement('div');
  }

  componentDidMount() {
    //Append the element into the DOM on mount, then render into
    // the modal container element

    //need to grab or pass the element that will become the root
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    //this is where the portal is used to render the children
    return ReactDOM.createPortal(
      //first the react element
      this.props.children,
      //then the element where you put it
      this.el
    );
  }
}

export default Modal;
