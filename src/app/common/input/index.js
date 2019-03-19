import React, {Component} from 'react';
import classNames from 'classnames';

import './styles.css';


class Input extends Component {
  render() {
    const { value, onChange, type } = this.props;

    return (
      <input 
        className={classNames('default_input', this.props.className)}
        value={value} 
        onChange={onChange}
        type={type}
      />
    );
  }
}

export default Input;
