import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


export default class Card extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>
            ☰
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              > 
                <button><NavLink exact to="/">Home</NavLink></button>
                <button><NavLink to="/ecoraster"> Ecoraster </NavLink></button>
                {/* <button> <NavLink to="/products">Products</NavLink></button> */}
                <button><NavLink to="/finished-projects">Finished Projects</NavLink></button>
                <button><NavLink to="/about-us">About Us</NavLink></button>
                <button><NavLink to="/contact-us">Contact Us</NavLink></button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}