import React, {Component} from 'react';
import classNames from 'classnames';

import './styles.css';


class Input extends Component {
  render() {

    return (
      <input className={classNames('default_input', this.props.className)} />
    );
  }
}

export default Input;
