import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const RiskCalculatorInput = React.forwardRef(({ className, inputs, onChange, listBalance}, ref) => {
   return (
      <div ref={ref} className={`container-risk-calculator ${className}`}>

        <div className="container-risk-calculator__header">
          <label>Current Amount</label>
          <label>Difference</label>
          <label>New Amount</label>
          <label>Recommended Transfers</label>
        </div>
        <div className="container-risk-calculator__body">
          <div className="first-column">
            {
              inputs.map((item, index) =>{
                return(
                  <div className="container-row" key={item.property}>
                    <div>
                      <div>
                        <label className="row-label">{item.label}</label>
                      </div>
                      <div>
                        <input type="number" className="row-input" onChange={(e)=>onChange(index,e.target.value)} value={item.currentAmount}/>
                      </div>
                    </div>
                    <div className="margin-auto-0">
                      <input type="text" readOnly={true}
                             className={ `row-input ${item.difference<0? 'input-red':'input-green'}` }
                             value={item.difference > 0 ? "+" + item.difference: item.difference }
                      />
                    </div>
                    <div className="margin-auto-0">
                      <input type="text"  readOnly={true} className="row-input" value={item.newAmount}/>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="second-column">
            <div className="risk-summary">
              <ul>
                {
                  listBalance.map((item,index)=>{
                    return(<li className={"summary-row"} key={index}>{item}</li>)
                  })
                }
              </ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
);

RiskCalculatorInput.displayName = 'RiskCalculatorInput';

RiskCalculatorInput.defaultProps = {
  className: '',
  inputs:[],
  listBalance: [],
};

RiskCalculatorInput.propTypes = {
  className: PropTypes.string,
  inputs: PropTypes.array,
  listBalance: PropTypes.array,
};

export default RiskCalculatorInput;