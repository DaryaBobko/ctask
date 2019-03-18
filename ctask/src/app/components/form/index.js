import React, {Component} from 'react';
import Input from '../../common/input/index';
import Button from '../../common/button/index';

import Icon from '../../../public/cancel.svg'
import './styles.css';


class Form extends Component {
  render() {

    return (
      <div className='form_wrapper_container'>
        <form className='form_container'>
          <img src={Icon} alt='icon' className='form_icon'/>
          <div className='form_wrapper_field'>
            <span><strong>Distance: </strong></span>
            <Input className='custom_input'/>
          </div>
          <div className='form_wrapper_field'>
            <span><strong>Time: </strong></span>
            <Input className='custom_input'/>
          </div>
          <div className='form_wrapper_field'>
            <span><strong>Date: </strong></span>
            <Input className='custom_input'/>
          </div>
          <Button linkTo='/home' className='custom_button'>Let me in</Button>
        </form>
      </div>
    );
  }
}

export default Form;
