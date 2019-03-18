   
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../common/input/index';
import InformationBar from '../../common/informationBar/index';

import AddImg from '../../../public/add.svg'
import './styles.css';

class Home extends Component {

  render() {
    return (
      <div  className='home_container'>
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
        <div className='home_wrapper_information_bar'>
          <InformationBar
            speed='10'
            distance='15 km'
            time='60 m'
          />
        </div>
        <Link to={`/home/create_new_resalt`}><img src={AddImg} alt='add' className='add_img'/></Link>
      </div>
    );
  }
}

export default Home;

