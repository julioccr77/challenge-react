import React,{ useState, useEffect } from 'react';
import './index.scss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {Calculator} from "../../components/templates";

export default function CalculatorPage() {
  const { data }  = useSelector((state) => state.riskDuck);
  const { id } = useParams();
  const [ dataSelected, setDataSelected ] = useState([]);
  const [ listBalance, setListBalance ] = useState([]);

  const initialPortfolio = [
    {property : 'bonds', label:'Bonds $:', currentAmount:0, difference:'', newAmount:'', differenceToMove:0},
    {property : 'largeCap', label:'Large Cap $:', currentAmount:0, difference:'', newAmount:'',differenceToMove:0},
    {property : 'midCap', label:'Mid Cap $:', currentAmount:0, difference:'', newAmount:'', differenceToMove:0},
    {property : 'foreign', label:'Foreign $:', currentAmount:0, difference:'', newAmount:'', differenceToMove:0},
    {property : 'smallCap', label:'Small Cap $:', currentAmount:0, difference:'', newAmount:'', differenceToMove:0},
  ];

  const [portfolio, setPortfolio] = useState(initialPortfolio);

  const onChangePortfolio = (index, value)=>{
    if(value){
      portfolio[index].currentAmount = parseFloat(value)
      setPortfolio([...portfolio]);
    }
  }

  const rebalance =() =>{
    let totalCurrentAmount = 0;
    const currentData =  dataSelected[0];
    const listBalance = [];

    portfolio.forEach(item=>{
      totalCurrentAmount += item.currentAmount;
    });

    portfolio.forEach(item=>{
      const expectedValue = ((totalCurrentAmount*currentData[item.property])/100).toFixed(3);
      item.difference = (expectedValue-item.currentAmount).toFixed(3);
      item.differenceToMove =  parseFloat((expectedValue-item.currentAmount).toFixed(3)) ;
      item.newAmount = expectedValue;
    });
    setPortfolio([...portfolio]);


    portfolio.forEach(item=>{
      if(item.difference>0){
        portfolio.forEach(itemAdd=>{
          if( itemAdd.property !== item.property &&  itemAdd.difference<0){
            let value = "";
            if(itemAdd.differenceToMove + item.differenceToMove >=0){
              value = "Transferer $ "+ Math.abs(itemAdd.differenceToMove) + " from " +itemAdd.property+ " to "+ item.property;
              item.differenceToMove = item.differenceToMove + itemAdd.differenceToMove;
              itemAdd.differenceToMove = 0;
            }else{
              value = "Transferer $"+ Math.abs(item.differenceToMove)  + " from " +itemAdd.property+ " to "+ item.property;
            }
            listBalance.push(value);
          }
        })
      }
    })
    setListBalance([...listBalance]);
  }

  useEffect(()=>{
    const dataSelected = data.filter(item=>{return item.risk === parseInt(id)});
    setDataSelected([...dataSelected])
  },[data, id]);

  return(
    <div>
      <Calculator
        portfolio={portfolio}
        onChange={onChangePortfolio}
        rebalance={rebalance}
        currentData = {dataSelected}
        riskLevel={id}
        listBalance={listBalance}
      />
    </div>
  );
}