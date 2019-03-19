import React, {Component} from 'react';
import Icon from '../../../public/icon.svg'
import './styles.css';


class InformationBar extends Component {
  render() {

    return (
      <div className='information_bar'>
        <img src={Icon} alt='icon' className='information_bar_icon'/>
        <div className='information_wrapper_fields'>
          <span className='information_date'>20.12.2017</span>
          <span><strong>Speed: </strong>{this.props.speed}</span>
          <span><strong>Distance: </strong>{this.props.distance}</span>
          <span><strong>Time: </strong>{this.props.time}</span>
        </div>
      </div>
    );
  }
}

export default InformationBar;
