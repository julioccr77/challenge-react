import React, {useState, useEffect} from 'react';
import './index.scss';

import {Table} from "../../molecules";
import {Button} from "../../atoms";
import {RiskCalculatorInput} from "../../organisms";

export default function Calculator({ currentData, portfolio, onChange, rebalance, riskLevel, listBalance }) {

  return (
    <div className="container-calculator">
      <div className="container-calculator__title"><p>Personalized Portfolio</p></div>
      <div>
        <div>{`Risk Level ${riskLevel}`} </div>
        <Table data={currentData}/>
      </div>
      <div className="container-calculator__info">
        <div className="label">Please Enter Your Current Portfolio</div>
        <Button onClick={rebalance}>Rebalance</Button>
      </div>
      <div>
        <RiskCalculatorInput
          inputs={portfolio}
          onChange={onChange}
          listBalance={listBalance}
        />
      </div>
    </div>
  )
}
