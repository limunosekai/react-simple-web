import React, { Component } from 'react';
import srcUrl from '../../assets/images/logo.png';

class Logo extends Component {
  render() {
    return (
      <div id='Logo'>
        <img src={srcUrl} alt='#' />
      </div>
    );
  }
}

export default Logo;
