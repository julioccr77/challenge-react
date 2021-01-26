//CONSTANTES

const dataInitial = {
  data : []
}
const RISK_INFO_SUCCESS ='RISK_INFO_SUCCESS';
const RISK_INFO_ERROR = 'RISK_INFO_ERROR';

//REDUCER

export default function riskReducer( state = dataInitial , action ) {
  switch (action.type) {
    case RISK_INFO_SUCCESS:
      return ({...state, data : action.payload})
    default :
      return state
  }
}

//ACCIONES

export const loadInformation = ()=>( dispatch, getState ) => {
  try {
    const data = [
      {risk:1, bonds:80,largeCap:20, midCap:0 , foreign:0, smallCap:0},
      {risk:2, bonds:70,largeCap:15, midCap:15, foreign:0, smallCap:0},
      {risk:3, bonds:60,largeCap:15, midCap:15, foreign:10, smallCap:0},
      {risk:4, bonds:50,largeCap:20, midCap:20, foreign:10, smallCap:0},
      {risk:5, bonds:40,largeCap:20, midCap:20, foreign:20, smallCap:0},
      {risk:6, bonds:35,largeCap:25, midCap:5, foreign:30, smallCap:5},
      {risk:7, bonds:20,largeCap:25, midCap:25, foreign:25, smallCap:5},
      {risk:8, bonds:10,largeCap:20, midCap:40, foreign:20, smallCap:10},
      {risk:9, bonds:5,largeCap:15, midCap:40, foreign:25, smallCap:15},
      {risk:10, bonds:0,largeCap:5, midCap:25, foreign:30, smallCap:40}
    ];
    const res = {data};

    dispatch({
      type : RISK_INFO_SUCCESS,
      payload:res.data
    })
  }catch(error){
    dispatch({
      type: RISK_INFO_ERROR,
      payload: 'error To load info'
    })
  }
};