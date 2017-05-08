import React, {Component} from 'react';

class Pager extends Component {
  componentWillMount() {
    console.log('Pager WILL MOUNT!')
  }

  componentDidMount() {
    console.log('Pager DID MOUNT!')
  }
  componentWillUnmount() {
    console.log('Pager WILL UNMOUNT!')
  }
  render() {
    console.log('Pager RENDER!')
    return (
      <div>
        <button> &laquo; </button>
        <button> &raquo; </button>
      </div>

    );
  }
}

export default Pager;
