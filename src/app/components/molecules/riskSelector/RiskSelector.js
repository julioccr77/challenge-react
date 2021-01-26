import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const RiskSelector = React.forwardRef(({ className, optionSelected, selectValue }, ref) => {
    const option =[
      {id:1, value:1},
      {id:2, value:2},
      {id:3, value:3},
      {id:4, value:4},
      {id:5, value:5},
      {id:6, value:6},
      {id:7, value:7},
      {id:8, value:8},
      {id:9, value:9},
      {id:10, value:10},
    ]
    return (
      <div ref={ref} className={`container-risk-selector ${className}`}>
        <div className="container-risk-selector__title">
          <div>Low</div>
          <div>High</div>
        </div>

        <div className="container-risk-selector__options">
          <div className="options-container">
            {
              option.map(item=>{
                return(
                  <div className={`option ${optionSelected === item.value ? 'option-selected' : ''}`}
                       id={item.id} onClick={()=>selectValue(item.value)}>
                    <p>{item.value}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
);

RiskSelector.displayName = 'RiskSelector';

RiskSelector.defaultProps = {
  className: '',
  optionSelected:1,
  selectValue: ()=>{},
};

RiskSelector.propTypes = {
  className: PropTypes.string,
  optionSelected: PropTypes.number,
  selectValue: PropTypes.func,
};

export default RiskSelector;