import React from 'react'
// import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const MoneyEarnedChart = ({owedAndPaidData}) => {
    
const labels = ["Unpaid", "Paid"];
const data = {
  labels: labels,
  datasets: [
    {
      backgroundColor: ["#93E0E4","#30CCD6"],
      borderColor: "rgb(0,0,255)",
      data: owedAndPaidData,
      borderWidth: 0,
      cutout: "90%",
      rotation: 30
    },
  ],
}

    if(data.length === 0){
        return "loading..."
    }

  return (
    <div>
        <Doughnut data={data}/>
        <div className='doughnut-text'>
            <p>You have earned </p>
            <h1>£{owedAndPaidData[0] + owedAndPaidData[1]}</h1>
            <p>You are owed </p>
            <h2>£{owedAndPaidData[0]}</h2>
        </div>
        <p>You have been paid</p>
        <h2>£{owedAndPaidData[1]}</h2>
    </div>
  )
}

export default MoneyEarnedChart