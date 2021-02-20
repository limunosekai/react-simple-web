import React, { Component } from 'react';

class SideBar extends Component {
  render() {
    return (
      <nav id='sub_menu'>
        <ul>
          <li>
            <a href='#'>Login</a>
          </li>
          <li>
            <a href='#'>Join</a>
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

export default SideBar;
