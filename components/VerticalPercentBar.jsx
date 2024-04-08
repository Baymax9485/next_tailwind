import React, { useEffect, useState } from 'react'

const VerticalPercentBar = (props) => {
  let percent = parseInt(props.now * 100 / props.last);
  let reversePercent = props.last * 100 / props.now;

  return (
    <>
      <div className="container">
        <p className="text-green-800 font-bold inline-flex">
          ${percent}%
        </p>
        <div className="barcontainer">
          <div className="bar">
          </div>
        </div>
        <style jsx>{`
        .container{
          width: 500px;
          height: 400px;
          overflow: hidden;
          position: relative;
          margin:50px auto;
        }

        .barcontainer{
          background-color: #181818;
          position: relative;
          transform: translateY(-50%);
          top: 50%;
          margin-left: 50px;
          width: 50px;
          height: 320px;
          float: left;
          //border darken(#98AFC7, 40%) 3px solid
        }
          
        .bar{
          background-color: #9BC9C7;
          position: absolute;
          bottom: 0;
          width: 100%;
          height: ${reversePercent}%;
          //border-top: 6px solid #FFF;
          box-sizing: border-box;
          animation: grow 1.5s ease-out forwards;
          transform-origin: bottom;
        }
          `}</style>
      </div>
    </>
  )
}

export default VerticalPercentBar