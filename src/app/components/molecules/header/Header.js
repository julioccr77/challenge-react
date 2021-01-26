import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import imghome from '../../../../assets/images/imghome.png';
import { Routes } from "../../../../routes";
import { useHistory } from 'react-router-dom';

const Header = React.forwardRef(({ className, withOptions, children, actions }, ref) => {
  const history = useHistory();

    return (
      <div  ref={ref} className={`container-header ${className}`} >
        <img src={imghome} width={55} height={55} onClick={()=> history.push(Routes.HOME)}/>
        <div className="container-header__title">Financial Advisor</div>
      </div>
    );
  }
);

Header.displayName = 'Header';

Header.defaultProps = {
  className: '',
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;