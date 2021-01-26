import React, {useEffect, useState} from 'react';
import './index.scss';

import {RiskSelector, Table} from "../../molecules";
import {Button} from "../../atoms";
import {DoughnutChart} from "../../organisms";
import show from '../../../../assets/icons/show.svg';

let dataInitialToChart = {
  labels: ['Bonds', 'Large Cap', 'Mid Cap', 'Foreign', 'Small Cap'],
  datasets: [
    {
      label: '%',
      data: [12, 19, 3, 5, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function Home({optionSelected, selectValue, goToCalculator,data, valuesToChart}) {

  const [showDoughnut, setShowDoughnut] = useState(false);
  const [dataToChart, setdataToChart] = useState(dataInitialToChart);

  useEffect(()=>{
    dataToChart.datasets[0].data =valuesToChart;
    setdataToChart({...dataToChart});
  },[valuesToChart]);

  const changeTypeOfView =()=>{
    if(optionSelected!==0){
      setShowDoughnut(!showDoughnut)
    }
  }

  return (
    <div className="container-home">
       <div className="container-home__title">
         <p> Please Select A Risk Level For Your Investment Portfolio</p>
       </div>
      <div>
        <RiskSelector optionSelected={optionSelected} selectValue={selectValue}/>

        <Button onClick={goToCalculator} disabled={optionSelected===0}>Continue</Button>
      </div>
      <div className="container-home__view">
        <label className="label">{`Show ${showDoughnut ? ' table' : 'donut'} view` }</label>
        <img src={show} onClick={changeTypeOfView} className={optionSelected===0 ? 'icon-disabled' : ''} />
      </div>

      {
        !showDoughnut ?
          <div className="container-home__table">
            <Table data={data} selectValue={optionSelected}/>
          </div> :
          <DoughnutChart title="INVESTMENT PORTFOLIO" data={dataToChart}/>
      }
    </div>
  )
}
