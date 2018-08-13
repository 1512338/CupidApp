import React, { Component } from 'react';
import { elastic as Menu } from 'react-burger-menu'

import './style.css'

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    return (

      <Menu 
        customBurgerIcon={<img src="/images/avt.jpg" />}
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        <ul className="main-menu flex flex-column justify-content-center">
          <li className="current-menu-item"><a href="index.html">Home</a></li>
          <li><a onClick={() => this.closeMenu()} href="#">My Cupid</a></li>
          <li><a onClick={() => this.closeMenu()} href="#">Point</a></li>
          <li><a onClick={() => this.closeMenu()} href="#">Activies</a></li>
          <li><a onClick={() => this.closeMenu()} href="#">Setting</a></li>
        </ul>
      </Menu>
    );
  }
}

export default Sidebar;