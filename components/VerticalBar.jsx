import React, { useEffect, useState } from 'react'

const VerticalBar = (props) => {
  let percent = parseInt(props.now * 100 / props.last);

  // const [chartData, setChartData] = useState({
  //   datasets: [],
  // })

  // const [chartOptions, setChartOptions] = useState({})

  // useEffect(() => {
  //   setChartData({
  //     labels:['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
  //     datasets:[
  //       {
  //         label: 'Sales ₱',
  //         data: [43132, 28321, 30176, 23245, 33975, 45524, 35756],
  //         borderColor: 'rgb(53, 162, 238)',
  //         backgroundColor: 'rgb(53, 162, 238, 0.4)'
  //       }
  //     ]
  //   })
  //   setChartOptions({
  //     plugins: {
  //       legend: {
  //         position: 'top',
  //       },
  //       title: {
  //         display: true,
  //         text: 'Daily Revenue'
  //       },    
  //     },
  //     maintainAspectRatio: false,
  //     responsive: true
  //   })
  // },[])

  return (
    <>
      <div className="container">
        <div className="flex justify-center">
          <p className="text-green-800 font-bold inline-flex">
            {percent}%
          </p>
        </div>
        <div className="flex m-4 relative h-28">
          <div className="bigbar">
            <p className="text-green-800 percent font-bold inline-flex">
              {props.now}
            </p>
          </div>
          <div className="smallbar">
            <p className="text-green-800 percent font-bold inline-flex">
              {props.last}
            </p>
          </div>
        </div>
        <style jsx>{`
          .percent{
            position: absolute;
            top:-20px;
          }
          .container{
            width: 100%;
            height: 150px;
          }

          .smallbar{
            background-color: rgb(21 128 61);
            position: absolute;
            left:60px;
            bottom: 0;
            width: 20px;
            height: ${2 * props.last}px;
          }
            
          .bigbar{
            background-color: rgb(11 64 31);
            position: absolute;
            left:20px;
            bottom: 0;
            width: 20px;  
            height: ${2 * props.now}px;
          }
          `}</style>
      </div>
    </>
  )
}

export default VerticalBar