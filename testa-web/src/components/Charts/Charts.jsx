import React, { useEffect, useState } from 'react'
import { Chartdata } from '../../Data/chartData'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJs, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js'
ChartJs.register(Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler)

const Charts = () => {
    const gradient = document.createElement('canvas').getContext('2d');
    const gradientFill = gradient.createLinearGradient(0, 0, 0, 300);
    gradientFill.addColorStop(0, '#19CDF5');
    gradientFill.addColorStop(1, '#1971F5');

    const [data] = useState({
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "First",
                data: Chartdata?.map((i) => i.value),
                backgroundColor: "white",
                borderColor:gradientFill,
                borderWidth: 3,
                pointRadius: 0,
                pointHoverRadius: 0,
                pointHitRadius: 10,
                pointHoverBackgroundColor: 'rgba(67, 85, 250, 0.50)',
                pointHoverBorderColor: 'rgba(67, 85, 250, 0.50)',
                pointHoverBorderWidth: 8,
                tension: 0.5,
            }
        ]
    })
    const options = {        
        scales: {
          x: {
            grid:{
                drawOnChartArea:false,
                drawBorder:false,
                display:true,
                lineWidth:0
            },
            
            ticks: {
              color: 'black'
            },
          },
          y: {
            ticks: {
              color: 'black'
            },
            grid:{
                borderColor:"green",
                borderWidth:3,
                drawBorder:false,
            },
            
            angleLines: {
                display: false
            }
          }
        },
        plugins: {
            legend: {
                display: false
            },
            drawLine:{
                id:"drawline",
                beforeDataDraw(chart,args,pluginOpt){
                    const {ctx,chartArea:{top,bottom,left,right,width,height},scales:{x,y}} = chart
                    ctx.save()
                    console.log(y)
                }
            }
        },
        // responsive: false

    };

    return (
        <div className='h-[18rem]'>
            <Line data={data} options={options} className='' />
        </div>
    )
}

export default Charts
