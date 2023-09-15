import React, { useEffect, useState } from 'react'
import Header from '../components/Header.js'
import MoneyEarnedChart from '../components/MoneyEarnedChart.js'
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import '../components/MoneyContainer.css'
import useSound from 'use-sound';
import Kerching from '../assets/sounds/Kerching.mp3'

const MoneyContainer = ({jobs}) => {

  const[jobsFilteredByDate, setJobsFilteredByDate] = useState([])
  const[filterView, setFilterView] = useState("")

  useEffect(() => {
    setJobsFilteredByDate(dummyJobs)
  },[])

  const [play] = useSound(Kerching, {volume: 0.5})
    play();

const text = "Money in your hat"

 const dummyJobs = [
    {
       "id": 1,
    "name": "Fixing a leaky tap",
    "description": "Repairing a dripping tap",
    "notes": "Mixer tap",
    "started": "2023-08-23T11:30:00",
    "ended": "2023-08-23T12:00:00",
      "timeTaken": 120,
      "completed": false,
      "paid": false,
      "client": {
        "id": 1,
        "firstName": "Mick",
        "lastName": "Cooke",
        "emailAddress": "mick@gmail.com",
        "address1": "21A Rhannan Road",
        "address2": "Glasgow",
        "postcode": "G44 3AZ",
        "country": "UK",
        "hourlyRate": 80,
        "hat": {
          "id": 1,
          "name": "Plumber",
          "iconName": "hat1",
          "user": {
            "id": 1,
            "firstName": "Mario",
            "lastName": "Bro Merge Test",
            "emailAddress": "email@asfas.com",
            "address1": "address 1",
            "address2": "address line 2",
            "postcode": "g68 3BB",
            "country": "Scotland"
          }
        }
      }
    },
    {
      "id": 6,
    "name": "Medical checkup",
    "description": "Routine health examination",
    "notes": "Not looking good..",
    "started": "2023-09-03T09:30:00",
    "ended": "2023-09-03T09:50:00",
      "timeTaken": 120,
      "completed": true,
      "paid": false,
      "client": {
        "id": 1,
        "firstName": "Mick",
        "lastName": "Cooke",
        "emailAddress": "mick@gmail.com",
        "address1": "21A Rhannan Road",
        "address2": "Glasgow",
        "postcode": "G44 3AZ",
        "country": "UK",
        "hourlyRate": 60,
        "hat": {
          "id": 1,
          "name": "Doctor",
          "iconName": "hat1",
          "user": {
            "id": 1,
            "firstName": "Mario",
            "lastName": "Bro Merge Test",
            "emailAddress": "email@asfas.com",
            "address1": "address 1",
            "address2": "address line 2",
            "postcode": "g68 3BB",
            "country": "Scotland"
          }
        }
      }
    },
    {
      "id": 7,
    "name": "Emergency medical assistance",
    "description": "Urgent medical care",
    "notes": "Emergency services",
    "started": "2023-09-06T16:45:00",
      "ended": "2023-09-10T11:00:00",
      "timeTaken":60,
      "completed": true,
      "paid": false,
      "client": {
        "id": 3,
        "firstName": "Emily",
        "lastName": "Smith",
        "emailAddress": "emily@example.com",
        "address1": "789 Oak Street",
        "address2": "San Francisco",
        "postcode": "94101",
        "country": "USA",
        "hourlyRate": 50,
        "hat": {
          "id": 3,
          "name": "Doctor",
          "iconName": "hat3",
          "user": {
            "id": 3,
            "firstName": "David",
            "lastName": "Williams",
            "emailAddress": "david@example.com",
            "address1": "101 Pine Road",
            "address2": "Chicago",
            "postcode": "60601",
            "country": "USA"
          }
        }
      }
    },
    {
     "id": 5,
    "name": "Restaurant reservation",
    "description": "Driving to a fancy dinner",
    "notes": "",
    "started": "2023-11-05T19:15:00",
    "ended": "2023-11-05T23:15:00",
      "timeTaken": 90,
      "completed": true,
      "paid": false,
      "client": {
        "id": 4,
        "firstName": "Michael",
        "lastName": "Anderson",
        "emailAddress": "michael@example.com",
        "address1": "456 Elm Street",
        "address2": "Miami",
        "postcode": "33101",
        "country": "USA",
        "hourlyRate": 120,
        "hat": {
          "id": 4,
          "name": "Driver",
          "iconName": "hat4",
          "user": {
            "id": 4,
            "firstName": "Lisa",
            "lastName": "Smith",
            "emailAddress": "lisa@example.com",
            "address1": "789 Oak Avenue",
            "address2": "San Francisco",
            "postcode": "94101",
            "country": "USA"
          }
        }
      }
    },
    {
      "id": 3,
    "name": "Installing a new kitchen sink",
    "description": "",
    "notes": "Remember champagne!",
    "started": "2023-07-28T09:30:00",
    "ended": "2023-07-28T13:30:00",
    "timeTaken": 4,
    "active": true,
    "completed": false,
    "paid": true,
      "client": {
        "id": 5,
        "firstName": "Jennifer",
        "lastName": "Brown",
        "emailAddress": "jennifer@example.com",
        "address1": "101 Maple Lane",
        "address2": "Seattle",
        "postcode": "98101",
        "country": "USA",
        "hourlyRate": 255,
        "hat": {
          "id": 5,
          "name": "Driver",
          "iconName": "hat5",
          "user": {
            "id": 5,
            "firstName": "Robert",
            "lastName": "Jones",
            "emailAddress": "robert@example.com",
            "address1": "222 Oak Road",
            "address2": "Los Angeles",
            "postcode": "90001",
            "country": "USA"
          }
        }
      }
    },
    {
      "id": 6,
      "name": "Installing Kitchen Cabinets",
      "description": "Assembling and installing kitchen cabinets",
      "notes": "Custom cabinets",
      "started": "2023-04-25T11:00:00",
      "ended": "2023-04-25T14:30:00",
      "timeTaken": 280,
      "completed": true,
      "paid": false,
      "client": {
        "id": 1,
        "firstName": "Mick",
        "lastName": "Cooke",
        "emailAddress": "mick@gmail.com",
        "address1": "21A Rhannan Road",
        "address2": "Glasgow",
        "postcode": "G44 3AZ",
        "country": "UK",
        "hourlyRate": 20,
        "hat": {
          "id": 1,
          "name": "Plumber",
          "iconName": "hat1",
          "user": {
            "id": 1,
            "firstName": "Mario",
            "lastName": "Bro Merge Test",
            "emailAddress": "email@asfas.com",
            "address1": "address 1",
            "address2": "address line 2",
            "postcode": "g68 3BB",
            "country": "Scotland"
          }
        }
      }
    },
    {
      "id": 7,
      "name": "Lawn Mowing",
      "description": "Mowing the front and back lawns",
      "notes": "Lawn size: 0.5 acres",
      "started": "2023-07-10T09:30:00",
      "ended": "2023-07-10T10:30:00",
      "timeTaken": 100,
      "completed": true,
      "paid": true,
      "client": {
        "id": 7,
        "firstName": "Susan",
        "lastName": "Clark",
        "emailAddress": "susan@example.com",
        "address1": "123 Maple Road",
        "address2": "Los Angeles",
        "postcode": "90001",
        "country": "USA",
        "hourlyRate": 30,
        "hat": {
          "id": 7,
          "name": "Driver",
          "iconName": "hat7",
          "user": {
            "id": 7,
            "firstName": "Michael",
            "lastName": "Davis",
            "emailAddress": "michael@example.com",
            "address1": "456 Oak Avenue",
            "address2": "Seattle",
            "postcode": "98101",
            "country": "USA"
          }
        }
      }
    },
    {
      "id": 8,
      "name": "Electrical Wiring",
      "description": "Installing electrical wiring in a new room",
      "notes": "New construction project",
      "started": "2022-09-18T13:15:00",
      "ended": "2022-09-18T15:45:00",
      "timeTaken": 80,
      "completed": true,
      "paid": true,
      "client": {
        "id": 8,
        "firstName": "Daniel",
        "lastName": "Roberts",
        "emailAddress": "daniel@example.com",
        "address1": "789 Pine Lane",
        "address2": "Miami",
        "postcode": "33101",
        "country": "USA",
        "hourlyRate": 55,
        "hat": {
          "id": 8,
          "name": "Electrician",
          "iconName": "hat8",
          "user": {
            "id": 8,
            "firstName": "Emily",
            "lastName": "Smith",
            "emailAddress": "emily@example.com",
            "address1": "101 Oak Road",
            "address2": "Chicago",
            "postcode": "60601",
            "country": "USA"
          }
        }
      }
    },
    {
      "id": 9,
      "name": "Plumbing Inspection",
      "description": "Inspecting and evaluating plumbing system",
      "notes": "Routine maintenance",
      "started": "2023-08-05T11:30:00",
      "ended": "2023-08-05T12:30:00",
      "timeTaken": 100,
      "completed": true,
      "paid": true,
      "client": {
        "id": 9,
        "firstName": "Mark",
        "lastName": "Wilson",
        "emailAddress": "mark@example.com",
        "address1": "123 Elm Avenue",
        "address2": "San Francisco",
        "postcode": "94101",
        "country": "USA",
        "hourlyRate": 45,
        "hat": {
          "id": 9,
          "name": "Plumber",
          "iconName": "hat9",
          "user": {
            "id": 9,
            "firstName": "Sarah",
            "lastName": "Johnson",
            "emailAddress": "sarah@example.com",
            "address1": "456 Pine Street",
            "address2": "Los Angeles",
            "postcode": "90001",
            "country": "USA"
          }
        }
      }
    },
    {
      "id": 10,
      "name": "Window Installation",
      "description": "Replacing old windows with new ones",
      "notes": "Client selected double-pane windows",
      "started": "2022-06-12T10:00:00",
      "ended": "2022-06-12T14:00:00",
      "timeTaken": 400,
      "completed": true,
      "paid": true,
      "client": {
        "id": 10,
        "firstName": "Linda",
        "lastName": "Davis",
        "emailAddress": "linda@example.com",
        "address1": "101 Oak Lane",
        "address2": "Seattle",
        "postcode": "98101",
        "country": "USA",
        "hourlyRate": 60,
        "hat": {
          "id": 10,
          "name": "Carpenter",
          "iconName": "hat10",
          "user": {
            "id": 10,
            "firstName": "James",
            "lastName": "Smith",
            "emailAddress": "james@example.com",
            "address1": "789 Elm Road",
            "address2": "Chicago",
            "postcode": "60601",
            "country": "USA"
          }
        }
      }
    },
    {
      "id": 11,
      "name": "Garden Landscaping",
      "description": "Redesigning and landscaping a garden",
      "notes": "New plantings and hardscape features",
      "started": "2023-01-28T09:00:00",
      "ended": "2023-01-28T16:00:00",
      "timeTaken": 70,
      "completed": true,
      "paid": true,
      "client": {
        "id": 11,
        "firstName": "Robert",
        "lastName": "Jones",
        "emailAddress": "robert@example.com",
        "address1": "123 Pine Avenue",
        "address2": "Los Angeles",
        "postcode": "90001",
        "country": "USA",
        "hourlyRate": 40,
        "hat": {
          "id": 11,
          "name": "Driver",
          "iconName": "hat11",
          "user": {
            "id": 11,
            "firstName": "Susan",
            "lastName": "Clark",
            "emailAddress": "susan@example.com",
            "address1": "456 Maple Road",
            "address2": "San Francisco",
            "postcode": "94101",
            "country": "USA"
          }
        }
      }
    },
    {
      "id": 12,
      "name": "Appliance Repair",
      "description": "Fixing a malfunctioning refrigerator",
      "notes": "Client reported cooling issue",
      "started": "2022-12-10T15:30:00",
      "ended": "2022-12-10T17:00:00",
      "timeTaken": 60,
      "completed": true,
      "paid": true,
      "client": {
        "id": 12,
        "firstName": "Mary",
        "lastName": "Smith",
        "emailAddress": "mary@example.com",
        "address1": "789 Pine Road",
        "address2": "Chicago",
        "postcode": "60601",
        "country": "USA",
        "hourlyRate": 55,
        "hat": {
          "id": 12,
          "name": "Appliance Repair Technician",
          "iconName": "hat12",
          "user": {
            "id": 12,
            "firstName": "Daniel",
            "lastName": "Roberts",
            "emailAddress": "daniel@example.com",
            "address1": "101 Elm Street",
            "address2": "Miami",
            "postcode": "33101",
            "country": "USA"
          }
        }
      }
    }
  ]
  

  const dummyJobs2 = [
    {
    "id": 1,
    "name": "Fixing a leaky tap",
    "description": "Repairing a dripping tap",
    "notes": "Mixer tap",
    "started": "2023-08-23T11:30:00",
    "ended": "2023-08-23T12:00:00",
    "timeTaken": 180,
    "active": true,
    "completed": true,
    "paid": false,
    "client": {
    "id": 3,
    "firstName": "Emma",
    "lastName": "Johnson",
    "emailAddress": "emma@example.com",
    "address1": "123 Oak Avenue",
    "address2": "New York",
    "postcode": "10001",
    "country": "USA",
    "notes": "Regular patron",
    "hourlyRate": 65,
    "hat": {
    "id": 1,
    "name": "Plumber",
    "iconName": "hat1",
    "user": {
    "id": 1,
    "firstName": "Mario",
    "lastName": "Bro",
    "emailAddress": "email@asfas.com",
    "address1": "address 1",
    "address2": "address line 2",
    "postcode": "g68 3BB",
    "country": "Scotland"
    }
    }
    }
    },
    {
    "id": 6,
    "name": "Medical checkup",
    "description": "Routine health examination",
    "notes": "Not looking good..",
    "started": "2023-09-03T09:30:00",
    "ended": "2023-09-03T09:50:00",
    "timeTaken": 120,
    "active": true,
    "completed": true,
    "paid": true,
    "client": {
    "id": 5,
    "firstName": "Liam",
    "lastName": "Harris",
    "emailAddress": "liam@example.com",
    "address1": "555 Oak Avenue",
    "address2": "Chicago",
    "postcode": "60604",
    "country": "USA",
    "notes": "Nightlife enthusiast",
    "hourlyRate": 60,
    "hat": {
    "id": 3,
    "name": "Doctor",
    "iconName": "hat3",
    "user": {
    "id": 1,
    "firstName": "Mario",
    "lastName": "Bro",
    "emailAddress": "email@asfas.com",
    "address1": "address 1",
    "address2": "address line 2",
    "postcode": "g68 3BB",
    "country": "Scotland"
    }
    }
    }
    },
    {
    "id": 7,
    "name": "Emergency medical assistance",
    "description": "Urgent medical care",
    "notes": "Emergency services",
    "started": "2023-09-06T16:45:00",
    "ended": null,
    "timeTaken": 360,
    "active": true,
    "completed": false,
    "paid": false,
    "client": {
    "id": 5,
    "firstName": "Liam",
    "lastName": "Harris",
    "emailAddress": "liam@example.com",
    "address1": "555 Oak Avenue",
    "address2": "Chicago",
    "postcode": "60604",
    "country": "USA",
    "notes": "Nightlife enthusiast",
    "hourlyRate": 60,
    "hat": {
    "id": 3,
    "name": "Doctor",
    "iconName": "hat3",
    "user": {
    "id": 1,
    "firstName": "Mario",
    "lastName": "Bro",
    "emailAddress": "email@asfas.com",
    "address1": "address 1",
    "address2": "address line 2",
    "postcode": "g68 3BB",
    "country": "Scotland"
    }
    }
    }
    },
    {
    "id": 5,
    "name": "Restaurant reservation",
    "description": "Driving to a fancy dinner",
    "notes": "",
    "started": "2023-11-05T19:15:00",
    "ended": "2023-11-05T23:15:00",
    "timeTaken": 1440,
    "active": true,
    "completed": true,
    "paid": false,
    "client": {
    "id": 1,
    "firstName": "Princess",
    "lastName": "Peach",
    "emailAddress": "princess@peach.com",
    "address1": "Big Castle",
    "address2": "Mushroom Kingdom",
    "postcode": "SM32",
    "country": "Marioland",
    "notes": "Regal attitude",
    "hourlyRate": 120,
    "hat": {
    "id": 2,
    "name": "Driver",
    "iconName": "hat2",
    "user": {
    "id": 1,
    "firstName": "Mario",
    "lastName": "Bro",
    "emailAddress": "email@asfas.com",
    "address1": "address 1",
    "address2": "address line 2",
    "postcode": "g68 3BB",
    "country": "Scotland"
    }
    }
    }
    },
    {
    "id": 3,
    "name": "Driving to Harrods",
    "description": "",
    "notes": "Remember champagne!",
    "started": "2023-07-28T09:30:00",
    "ended": "2023-07-28T13:30:00",
    "timeTaken": 4,
    "active": true,
    "completed": false,
    "paid": true,
    "client": {
    "id": 4,
    "firstName": "Ella",
    "lastName": "Davis",
    "emailAddress": "ella@example.com",
    "address1": "555 Cedar Lane",
    "address2": "New York",
    "postcode": "10002",
    "country": "USA",
    "notes": "Repeat customer",
    "hourlyRate": 280,
    "hat": {
    "id": 2,
    "name": "Driver",
    "iconName": "hat2",
    "user": {
    "id": 1,
    "firstName": "Mario",
    "lastName": "Bro",
    "emailAddress": "email@asfas.com",
    "address1": "address 1",
    "address2": "address line 2",
    "postcode": "g68 3BB",
    "country": "Scotland"
    }
    }
    }
    },
    {
    "id": 8,
    "name": "Lift to the shops",
    "description": "The ones by shell beach",
    "notes": "Remember petrol",
    "started": null,
    "ended": null,
    "timeTaken": null,
    "active": null,
    "completed": null,
    "paid": null,
    "client": {
    "id": 1,
    "firstName": "Princess",
    "lastName": "Peach",
    "emailAddress": "princess@peach.com",
    "address1": "Big Castle",
    "address2": "Mushroom Kingdom",
    "postcode": "SM32",
    "country": "Marioland",
    "notes": "Regal attitude",
    "hourlyRate": 120,
    "hat": {
    "id": 2,
    "name": "Driver",
    "iconName": "hat2",
    "user": {
    "id": 1,
    "firstName": "Mario",
    "lastName": "Bro",
    "emailAddress": "email@asfas.com",
    "address1": "address 1",
    "address2": "address line 2",
    "postcode": "g68 3BB",
    "country": "Scotland"
    }
    }
    }
    },
    {
    "id": 9,
    "name": "sdf",
    "description": "sdfsd",
    "notes": "sdfsdf",
    "started": null,
    "ended": null,
    "timeTaken": null,
    "active": null,
    "completed": null,
    "paid": null,
    "client": {
    "id": 5,
    "firstName": "Liam",
    "lastName": "Harris",
    "emailAddress": "liam@example.com",
    "address1": "555 Oak Avenue",
    "address2": "Chicago",
    "postcode": "60604",
    "country": "USA",
    "notes": "Nightlife enthusiast",
    "hourlyRate": 60,
    "hat": {
    "id": 3,
    "name": "Doctor",
    "iconName": "hat3",
    "user": {
    "id": 1,
    "firstName": "Mario",
    "lastName": "Bro",
    "emailAddress": "email@asfas.com",
    "address1": "address 1",
    "address2": "address line 2",
    "postcode": "g68 3BB",
    "country": "Scotland"
    }
    }
    }
    },
    {
    "id": 4,
    "name": "Installing a new kitchen sink",
    "description": "Upgrading kitchen plumbing",
    "notes": "Kitchen renovation",
    "started": "2023-10-05T15:30:00",
    "ended": "2023-10-05T16:30:00",
    "timeTaken": 3605,
    "active": true,
    "completed": true,
    "paid": true,
    "client": {
    "id": 2,
    "firstName": "David",
    "lastName": "Wilson",
    "emailAddress": "david@example.com",
    "address1": "14 Elm Street",
    "address2": "Los Angeles",
    "postcode": "90001",
    "country": "USA",
    "notes": "Frequent customer",
    "hourlyRate": 55,
    "hat": {
    "id": 1,
    "name": "Plumber",
    "iconName": "hat1",
    "user": {
    "id": 1,
    "firstName": "Mario",
    "lastName": "Bro",
    "emailAddress": "email@asfas.com",
    "address1": "address 1",
    "address2": "address line 2",
    "postcode": "g68 3BB",
    "country": "Scotland"
    }
    }
    }
    },
    {
    "id": 10,
    "name": "sdf",
    "description": "dsf",
    "notes": "sdsdf",
    "started": null,
    "ended": null,
    "timeTaken": 13,
    "active": null,
    "completed": null,
    "paid": null,
    "client": {
    "id": 2,
    "firstName": "David",
    "lastName": "Wilson",
    "emailAddress": "david@example.com",
    "address1": "14 Elm Street",
    "address2": "Los Angeles",
    "postcode": "90001",
    "country": "USA",
    "notes": "Frequent customer",
    "hourlyRate": 5,
    "hat": {
    "id": 1,
    "name": "Plumber",
    "iconName": "hat1",
    "user": {
    "id": 1,
    "firstName": "Mario",
    "lastName": "Bro",
    "emailAddress": "email@asfas.com",
    "address1": "address 1",
    "address2": "address line 2",
    "postcode": "g68 3BB",
    "country": "Scotland"
    }
    }
    }
    },
    {
    "id": 2,
    "name": "Replacing a damaged pipe",
    "description": "Fixing a burst pipe",
    "notes": "Pipe replacement",
    "started": "2023-09-07T10:00:00",
    "ended": null,
    "timeTaken": 4514,
    "active": true,
    "completed": false,
    "paid": false,
    "client": {
    "id": 2,
    "firstName": "David",
    "lastName": "Wilson",
    "emailAddress": "david@example.com",
    "address1": "14 Elm Street",
    "address2": "Los Angeles",
    "postcode": "90001",
    "country": "USA",
    "notes": "Frequent customer",
    "hourlyRate": 55,
    "hat": {
    "id": 1,
    "name": "Plumber",
    "iconName": "hat1",
    "user": {
    "id": 1,
    "firstName": "Mario",
    "lastName": "Bro",
    "emailAddress": "email@asfas.com",
    "address1": "address 1",
    "address2": "address line 2",
    "postcode": "g68 3BB",
    "country": "Scotland"
    }
    }
    }
    }
    ]
  

  

  if(jobsFilteredByDate.length === 0){
    return(
      <p>Loading...</p>
      
    )
  }

  

  function filterByMonth(){
    let jobsThisMonth = []
    const date = new Date();
    jobsThisMonth = dummyJobs.filter(a => {
      let endDateTime = a.ended
      let jobEndDate = new Date(endDateTime.split("T"))
      return (jobEndDate.getMonth() == date.getMonth() && jobEndDate.getFullYear() == date.getFullYear());
    });
  setJobsFilteredByDate(jobsThisMonth)
  setFilterView("month")
}

function filterByYear(){
  let jobsThisYear = []
  const date = new Date();
  jobsThisYear = dummyJobs.filter(a => {
    let endDateTime = a.ended
    let jobEndDate = new Date(endDateTime.split("T"))
    return (jobEndDate.getFullYear() == date.getFullYear());
  });
setJobsFilteredByDate(jobsThisYear)
setFilterView("year")
}

function getAllJobs(){
setJobsFilteredByDate(dummyJobs)
setFilterView("all")
}





  // owed an paid chart loops
  let totalEarned = 0
  let totalPaid = 0
  
 
  jobsFilteredByDate.forEach((job) =>{
totalEarned += Math.floor(((job.timeTaken / 60) * job.client.hourlyRate)*100)/100
if(job.paid){
  totalPaid += Math.floor(((job.timeTaken / 60) * job.client.hourlyRate)*100)/100
  }
})

let totalEarnedNew = Math.floor((totalEarned)*100)/100
let totalOwed = Math.floor((totalEarned - totalPaid)*100)/100

// Total income chart properties
let owedAndPaidChart = {
  data: [totalOwed, totalPaid],
  labels: ["Unpaid", "Paid"],
  header: "You have earned",
  headerValue: `£${totalEarnedNew}`,
  subheader: "You are owed",
  subheaderValue: `£${totalOwed}`,
  footer: "You have been paid",
  footerValue: `£${totalPaid.toFixed(2)}`,
  colors: ["#ff5c5c","#85ff8d"]
}

// total earned by hat loops
let totalEarnedByHat = {}

jobsFilteredByDate.forEach((job) => {
  if(!totalEarnedByHat[job.client.hat.name]){
    totalEarnedByHat[job.client.hat.name] = 0
  }
  totalEarnedByHat[job.client.hat.name] += Math.floor((job.timeTaken / 60) * job.client.hourlyRate)*100/100
})
let totalByHatData = []
Object.keys(totalEarnedByHat).map(function(property){
  totalByHatData.push(totalEarnedByHat[property])
})
let highestPaidHat = Object.keys(totalEarnedByHat).reduce(function(a, b){ return totalEarnedByHat[a] > totalEarnedByHat[b] ? a : b });
let lowestPaidHat = Object.keys(totalEarnedByHat).reduce(function(a, b){ return totalEarnedByHat[a] < totalEarnedByHat[b] ? a : b });

// total earned by hat chart properties
let totalByHatChart = {
  data: totalByHatData,
  labels: Object.keys(totalEarnedByHat),
  header: "Your highest paying hat was:",
  headerValue: highestPaidHat,
  subheader: "It earned you:",
  subheaderValue: `£${totalEarnedByHat[highestPaidHat]}`,
  footer: "Your lowest paying hat was:",
  footerValue: `${lowestPaidHat}`,
  colors: ["#93E0E4","#30CCD6","#4291ff"]
}

// total by client loops
let totalEarnedByClient = {}
jobsFilteredByDate.forEach((job) => {
  if(!totalEarnedByClient[job.client.firstName + " " + job.client.lastName]){
    totalEarnedByClient[job.client.firstName + " " +job.client.lastName] = 0
  }
  totalEarnedByClient[job.client.firstName + " " + job.client.lastName] += Math.floor((job.timeTaken / 60) * job.client.hourlyRate)*100/100
})

let totalByClientData = []
Object.keys(totalEarnedByClient).map(function(property){
  totalByClientData.push(totalEarnedByClient[property])
})

let highestPayingClient = Object.keys(totalEarnedByClient).reduce(function(a, b){ return totalEarnedByClient[a] > totalEarnedByClient[b] ? a : b });

let lowestPayingClient = Object.keys(totalEarnedByClient).reduce(function(a, b){ return totalEarnedByClient[a] < totalEarnedByClient[b] ? a : b });

let totalByClientChart = {
  data: totalByClientData,
  labels: Object.keys(totalEarnedByClient),
  header: "Your highest paying client was:",
  headerValue: highestPayingClient,
  subheader: "They paid you:",
  subheaderValue: `£${totalEarnedByClient[highestPayingClient]}`,
  footer: "Your lowest paying client was:",
  footerValue: `${lowestPayingClient}`,
  colors: ["#93E0E4","#30CCD6","#4291ff"]
}

// total by job loops
const highestPayingJob = jobsFilteredByDate.reduce(
  (prev, current) => {
    return prev.timeTaken * prev.client.hourlyRate > current.timeTaken * current.client.hourlyRate ? prev : current
  }
);
const highestPayingJobEarnings = Math.floor(((highestPayingJob.timeTaken / 60) * highestPayingJob.client.hourlyRate)*100)/100

const lowestPayingJob = jobsFilteredByDate.reduce(
  (prev, current) => {
    return prev.timeTaken * prev.client.hourlyRate < current.timeTaken * current.client.hourlyRate ? prev : current
  }
);

let totalByJobChart = {
  data: jobsFilteredByDate.map(job => (job.timeTaken / 60) * job.client.hourlyRate),
  labels: jobsFilteredByDate.map(a => a.name),
  header: "Your highest paying job was:",
  headerValue: `${highestPayingJob.name}`,
  subheader: "It earned you:",
  subheaderValue: `£${highestPayingJobEarnings}`,
  footer: "Your lowest paying job was:",
  footerValue: `${lowestPayingJob.name}`,
  colors: ["#93E0E4","#30CCD6","#4291ff"]
}



  return (
    <>
    <Header text={text}/>
<div className='money'>
    <div className='insights-links-container'>
      <NavLink activeStyle className="insights-link" to="/money/total">Owed and Paid</NavLink>
      <NavLink activeStyle  className="insights-link" to="/money/incomebyhat">Income by Hat</NavLink>
      <NavLink activeStyle className="insights-link" to="/money/incomebyclient">Income by Client</NavLink>
      <NavLink activeStyle className="insights-link" to="/money/incomebyjob">Income by Job</NavLink>
    </div>
    <Routes>
      <Route path="/total" element={<MoneyEarnedChart chartProperties={owedAndPaidChart}/>}/>
      <Route path="/incomebyhat" element={<MoneyEarnedChart chartProperties={totalByHatChart}/>}/>
      <Route path="/incomebyclient" element={<MoneyEarnedChart chartProperties={totalByClientChart}/>}/>
      <Route path="/incomebyjob" element={<MoneyEarnedChart chartProperties={totalByJobChart}/>}/>
    </Routes>

    <div className='insights-links-container'>
      <button className={filterView == "all" ? "active" : "not-active"} onClick={getAllJobs}>All Time</button>
      <button className={filterView == "month" ? "active" : "not-active"} onClick={filterByMonth}>This Month</button>
      <button className={filterView == "year" ? "active" : "not-active"} onClick={filterByYear}>This Year</button>
    </div>
</div>
    </>
  )
}


export default MoneyContainer