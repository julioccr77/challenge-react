import React from 'react'
import {Doughnut} from "react-chartjs-2";
import PropTypes from 'prop-types';

const DoughnutChart = React.forwardRef(({ className,title, data}, ref) => {
    return (
      <div ref={ref} className={`container-doughnut-chart ${className}`}>
        <div className='header'>
          <h2 className='title'>{title}</h2>
        </div>
        <Doughnut data={data}  redraw={true}  height={2} width={7}/>
      </div>
    );
  }
);


DoughnutChart.displayName = 'DoughnutChart';

DoughnutChart.defaultProps = {
  className: '',
  title:'Doughnut Chart'
};

DoughnutChart.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

export default DoughnutChart;