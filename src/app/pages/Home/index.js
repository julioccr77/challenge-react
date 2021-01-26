import React,{ useState, useEffect } from 'react';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Home } from "../../components/templates";
import { Routes } from "../../../routes";
import { loadInformation } from '../../redux/ducks/riskDuck';
import {cloneDeep} from "lodash";

export default function HomePage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { data }  = useSelector((state) => state.riskDuck);

  const [riskSelected, setRiskSelected] = useState(0);
  const [valuesToChart, setValuesToChart] = useState([]);

  const loadRisk =async ()=>{
    await dispatch(loadInformation());
  }

  const selectRiskSelected =(value)=>{
    setRiskSelected(value);
   const dataSelectedFilter = data.filter(item => item.risk === value);
   if(dataSelectedFilter.length>0){

     let  dataSelected = cloneDeep(dataSelectedFilter[0]);
     delete dataSelected.risk;
     setValuesToChart([...Object.values(dataSelected)])
   }

  };

   useEffect(()=>{
     loadRisk();
   },[]);

  return(
    <div>
      <Home
        optionSelected={riskSelected}
        selectValue={(value)=> selectRiskSelected(value)}
        goToCalculator={()=> history.push(`${Routes.CALCULATOR}/${riskSelected}`)}
        data={data}
        valuesToChart={valuesToChart}
      />
    </div>
  );
}