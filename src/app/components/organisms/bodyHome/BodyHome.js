import React from 'react';
import './index.scss';
import {Header} from "../../molecules";

export default function BodyHome({ children }) {
  return (
    <div className="container-home">
      <Header/>
      <div className="container-home__children">
        {children}
      </div>
    </div>
  );
}

BodyHome.propTypes = {};

export const withBodyHome = (Component) => (props) => {
  return (
    <BodyHome>
      <Component {...props} />
    </BodyHome>
  );
};
