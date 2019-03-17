import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './styles.css';

const button = (props) => {
  return <button
    type={props.type}
    className={classNames('default_button', props.className)}
    onClick={props.onClick}
    ref={props.buttonRef}
  >
    {props.children}
  </button>
};

 const Button = (props) => {
  return (
    <Fragment>
      {
        props.linkTo
        ? (<Link to={{pathname: props.linkTo}}>{button(props)}</Link>)
        : button(props)
      }
    </Fragment>
  );
}

export default Button;
