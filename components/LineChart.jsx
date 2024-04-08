import { useEffect, useRef } from "react"
import { Chart } from "chart.js/auto";

let chart = null;
function LineChart() {
  const chartRef = useRef(null);
  useEffect(() => {
    let ctx = document.getElementById('chart').getContext('2d');
    let chartData = {
      type: 'line',
      data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [{
          data: [86, 114, 106, 106, 107, 111, 133],
          label: "Applied",
          borderColor: "#3e95cd",
          backgroundColor: "#7bb6dd",
          fill: false,
          pointStyle: false,
          tension: 0.3,
        }, {
          data: [70, 90, 44, 60, 83, 90, 100],
          label: "Accepted",
          borderColor: "#3cba9f",
          backgroundColor: "#71d1bd",
          fill: false,
          pointStyle: false,
          tension: 0.3,
        }
        ],

      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'bottom'
          }
        }
      },
    }
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, chartData);

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    }
  }, [])
  return (
    <>
      {/* <p className="text-gray-800 font-bold">Chart sample</p> */}
      <div className="w-auto p-6 flex mx-auto my-auto">
        <div className='pt-0 w-full h-fit my-auto'>
          <canvas id='chart'></canvas>
        </div>
      </div>
    </>
  )
}

export default LineChart;