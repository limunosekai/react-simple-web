import React, { Component } from 'react';
import faceUrl from '../../assets/images/facebook.gif';
import twitUrl from '../../assets/images/twitter.gif';

class Footer extends Component {
  render() {
    return (
      <footer>
        <hr />
        <div id='copy'>
          All contents copyright 2021 Lim all rights reserved
          <br />
          Contact mail : powerlsh0103@gmail.com TEL : 010-0000-1234
        </div>
        <div id='social'>
          <img src={faceUrl} alt='Facebook' />
          <img src={twitUrl} alt='Twitter' />
        </div>
      </footer>
    );
  }
}

export default Footer;
