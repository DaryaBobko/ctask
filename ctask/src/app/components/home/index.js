   
import React, { Component } from 'react';

import Input from '../../common/input/index';

import './styles.css';

class Home extends Component {

  render() {
    return (
      <div>
        <div className='home_top_filters'>
          <div className='home_wrapper_filter'>
            <span className='home_top_label'>Date from</span>
            <Input/>
          </div>
          <div className='home_wrapper_filter'>
            <span className='home_top_label'>Date to</span>
            <Input/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

