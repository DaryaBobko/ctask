import React, {Component} from 'react';
import Input from '../../common/input/index';
import Button from '../../common/button/index';

import Icon from '../../../public/cancel.svg'
import './styles.css';


class Form extends Component {

  state= {
    distance: '',
    time: '',
    date: ''
  }

  saveJog = () => {
    const payload = {
      distance: this.state.distance,
      time: this.state.time,
      date: this.state.date
    }

    this.sendRequest('/v1/data/jog', 'POST', payload)
      .then((response) => {
          return response.json();
      });
  }

  render() {

    return (
      <div className='form_wrapper_container'>
        <form className='form_container'>
          <img src={Icon} alt='icon' className='form_icon'/>
          <div className='form_wrapper_field'>
            <span><strong>Distance: </strong></span>
            <Input type='number' className='custom_input' value={this.state.distance} onChange={(e) => this.setState({distance: e.target.value})}/>
          </div>
          <div className='form_wrapper_field'>
            <span><strong>Time: </strong></span>
            <Input type='number' className='custom_input' value={this.state.time} onChange={(e) => this.setState({time: e.target.value})}/>
          </div>
          <div className='form_wrapper_field'>
            <span><strong>Date: </strong></span>
            <Input type='date' className='custom_input' value={this.state.date} onChange={(e) => this.setState({date: e.target.value})}/>
          </div>
          <Button linkTo='/home' className='custom_button' onClick={this.saveJog}>Save</Button>
        </form>
      </div>
    );
  }
}

export default Form;
