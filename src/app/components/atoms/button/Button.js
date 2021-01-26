import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

export const ButtonColor = {
  blue: 'button-blue',
  orange: 'button-orange',
  white: 'button-white',
  red: 'button-red',
  green: 'button-green',
};

const Button = React.forwardRef(({ type, className, onClick, disabled, children }, ref) => (
  <div ref={ref} className={`container-button  ${type} ${className}`}>
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${disabled? "button-disabled": ""}`}>
      {children}
    </button>
  </div>
));

Button.displayName = 'Button';

Button.defaultProps = {
  className: '',
  onClick: () => {},
  type: ButtonColor.blue,
  disabled:false,
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
