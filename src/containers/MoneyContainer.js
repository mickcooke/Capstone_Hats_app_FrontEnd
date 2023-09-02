import React from 'react'
import Header from '../components/Header.js'
import MoneyEarnedChart from '../components/MoneyEarnedChart.js'


const MoneyContainer = ({jobs}) => {

  const text = "Money in your hat"


  // changing the data to give a fake timeTaken property for testing purposes
  let jobsCopy = [...jobs]
  jobsCopy[0].timeTaken = 120
  jobsCopy[1].timeTaken = 60
  jobsCopy[2].timeTaken = 180

  let totalEarned = 0
  let totalPaid = 0

  jobsCopy.forEach((job) =>{
totalEarned += (job.timeTaken / 60) * job.client.hourlyRate
if(job.paid){
  totalPaid += (job.timeTaken / 60) * job.client.hourlyRate
  }
})
 console.log(`total earned: ${totalEarned}`)
 console.log(`total paid: ${totalPaid}`)

 let data = [(totalEarned - totalPaid), totalPaid]

  return (
    <>
    <Header text={text}/>
    <div>MoneyContainer</div>
    <MoneyEarnedChart owedAndPaidData={data}/>
    </>
  )
}

export default MoneyContainer