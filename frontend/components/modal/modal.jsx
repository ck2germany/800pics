import React from 'react';

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

}
