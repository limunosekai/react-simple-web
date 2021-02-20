import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav id='top_menu'>
        <ul>
          <li>
            <a href='#'>HOME</a>
          </li>
          <li>
            <a href='#'>Who is Lim?</a>
          </li>
          <li>
            <a href='#'>Member</a>
          </li>
          <li>
            <a href='#'>Board</a>
          </li>
          <li>
            <a href='#'>Ajax Board</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
