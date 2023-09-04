import React from 'react'
import {Chart} from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import './MoneyContainer.css'

const MoneyEarnedChart = ({chartProperties}) => {
    
const data = {
  labels: chartProperties.labels,
  datasets: [
    {
      backgroundColor: chartProperties.colors,
      borderColor: "#fcfcfc",
      data: chartProperties.data,
      borderWidth: 1,
      cutout: "90%",
      rotation: 30
    }
  ]
}
const options = {
    plugins: {
        tooltip:{
            // enabled: false
        },
        legend: {
            display: false,
        }
    }
};

    if(data.length === 0){
        return "loading..."
    }

  return (
    <div>
        <div className='doughnut-container'>
            <Doughnut data={data} options={options}/>
            <div className='doughnut-middle-text'>
                <p>{chartProperties.header}</p>
                <h1>{chartProperties.headerValue}</h1>
                <p>{chartProperties.subheader}</p>
                <h2>{chartProperties.subheaderValue}</h2>
            </div>
            <div className='doughnut-footer-text'>
                <p>{chartProperties.footer}</p>
                <h2>{chartProperties.footerValue}</h2>
            </div>

        </div>
        
    </div>
  )
}

export default MoneyEarnedChart