import React, { Component } from 'react';

export default class Button extends Component{
    constructor(){
        super()
        container = React.createRef();
        state = {
            open: false,
          };
    }
    
    handleButtonClick = () => {
        this.setState(state => {
          return {
            open: !state.open,
          };
        });
    };
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            open: false,
          });
        }
    };

    render() {
        return (
          <div className="App">
            <div className="container" ref={this.container}>
              <button type="button" class="button">
                ☰
              </button>
              <div class="dropdown">                    
                    <ul>
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/ecoraster"> Ecoraster </NavLink></li>
                        <li><NavLink to="/finished-projects">Finished Projects</NavLink></li>
                        {/* <li><NavLink to="/products">Products</NavLink></li> */}
                        <li><NavLink to="/about-us">About Us</NavLink></li>
                        <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                    </ul>
                </div>
            </div>
          </div>
        );
      }
}