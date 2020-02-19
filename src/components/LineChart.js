import React from "react";
import axios from 'axios';  

let playername = [];  
let runscore = [];  


class LineChart extends React.Component
{
    constructor(props){
        super(props);

        this.state= {data :{}};

    }

    componentDidMount(){
var url="http://localhost:4000/bars/GetFormRecord"
// http://localhost:4000/bars/Getrecord
        axios.get(url)  
                            .then(res => {  
                                        console.log(res);  
                                        const ipl = res.data;  
                                      
                                        ipl.forEach(record => {  
                                                playername.push(record.month);  
                                                runscore.push(record.profit);  

                                        });  
        
        

            })
            this.createChart();


    }

    createChart=()=> {
        var Chart = require('chart.js');

        var ctx = document.getElementById('myChart').getContext('2d');
        var ctx = document.getElementById("myChart");
ctx.height = 30;


    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: playername,
        datasets: [{
            label: '# runs',
            data: runscore,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
               
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                stacked :true
            }]
        }
    }
});


    }
    render(){
        return(
               

                <div>  
                     <h2>chart.js -> linechart</h2> 
                  

                <canvas id="myChart" width="100vh" height="100vw"></canvas>

                </div>
        )}
        }
      

export default LineChart;