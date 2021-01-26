import React from 'react';
import './index.scss';
import PropTypes from "prop-types";

export default function   Table({ className, data, selectValue}) {
  return(
    <div className={`table ${className}`}>
      <table className="container-table">
        <thead>
        <tr className="table-header">
          <th className="table-header-item">Risk</th>
          <th className="table-header-item">Bonds %</th>
          <th className="table-header-item">Large Cap %</th>
          <th className="table-header-item">Mid Cap %</th>
          <th className="table-header-item">Foreign %</th>
          <th className="table-header-item">Small Cap %</th>
        </tr>
        </thead>
        <tbody>
        {
          data.map(item=>{
            return (
              <tr className={`table-body ${selectValue === item.risk? 'row-selected':""}`} key={item.risk}>
                <td className="table-body-item item-bold">{item.risk}</td>
                <td className="table-body-item">{item.bonds}</td>
                <td className="table-body-item">{item.largeCap}</td>
                <td className="table-body-item">{item.midCap}</td>
                <td className="table-body-item">{item.foreign}</td>
                <td className="table-body-item">{item.smallCap}</td>
              </tr>
            )
          })
        }
        </tbody>

      </table>

    </div>
  )
}

Table.displayName = 'Table';

Table.defaultProps = {
  className: "",
  data: [],
  selectValue:0,
};

Table.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  selectValue:PropTypes.number,
};
