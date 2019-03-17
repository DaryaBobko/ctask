   
import React, { Component } from 'react';

import Menu from '../../menu/index';
import Button from '../../../common/button/index';

import BearDecstop from '../../../../public/bear-face.svg'
import BearMobile from '../../../../public/bear-face-purpur.svg'
import './styles.css';

class AuthLayout extends Component {


  render() {
  return (
    <div className='auth_main'>
      <Menu auth={true}/>
      <div className='auth_wrapper_form'>
        <div className='auth_form'>
          <img src={BearDecstop} alt='bear' className='auth_img_bear'/>
          <img src={BearMobile} alt='bear' className='auth_img_bear_mobile'/>
          <Button linkTo='/home' className='custom_button'>Let me in</Button>
        </div>
      </div>
    </div>
  );
  }
}

export default AuthLayout;

