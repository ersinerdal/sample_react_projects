import React, {Component} from 'react';
import {Link} from 'react-router'

class Header extends Component {
  render() {
    return (
      <div>
        <b>Logo</b>
        &nbsp;
        <Link to="/">Home</Link>
        <span> | </span>
        <Link to="/contact">Contact</Link>
        <hr/>
      </div>
    );
  }
}

export default Header;
