   
import React, { Component } from 'react';

import Menu from '../../menu/index';
import Button from '../../../common/button/index';

import BearDecstop from '../../../../public/bear-face.svg'
import BearMobile from '../../../../public/bear-face-purpur.svg'
import './styles.css';

class AuthLayout extends Component {

  authorize = () => {
    localStorage.setItem('Authorization', 'Bearer eb8cdf9e61521369da24ab55f0095f5da870881990d9b75daefef50333178daf');
  }

  render() {
  return (
    <div className='auth_main'>
      <Menu auth={true}/>
      <div className='auth_wrapper_form'>
        <div className='auth_form'>
          <img src={BearDecstop} alt='bear' className='auth_img_bear'/>
          <img src={BearMobile} alt='bear' className='auth_img_bear_mobile'/>
          <Button linkTo='/home' className='custom_button' onClick={this.authorize}>Let me in</Button>
        </div>
      </div>
    </div>
  );
  }
}

export default AuthLayout;

