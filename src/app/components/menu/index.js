   
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Logo from '../../../public/logo.svg'
import './styles.css';

class Menu extends Component {
  constructor({match}) {
    super();
    this.match = match;
  }

  rendeList = () => {
    return (
      <div className='menu_list'>
        <Link to={`/home`} className='menu_list_items'>JOGS</Link>
        <Link to={`/home/info`} className='menu_list_items'>INFO</Link>
        <Link to={`/home/info`} className='menu_list_items'>CONTACT US</Link>        
      </div>
    )
  }
  
  render() {
    return (
      <div className='menu_main'>
        <img src={Logo} alt='logo' className='menu_logo' />
        {!this.props.auth && this.rendeList() }
      </div>
    );
  }
}

export default Menu;

