import React from "react";
import axios from 'axios';  

let playername = [];  
let runscore = [];  


class BubbleChart extends React.Component
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

        console.log(playername);
        console.log(runscore);
        
        
        var Chart = require('chart.js');

        var ctx = document.getElementById('doChart').getContext('2d');
        var ctx = document.getElementById("doChart");
ctx.height = 30;


    var doChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: playername,
        datasets: [{
            label: '# runs',
            data: runscore,
            backgroundColor: [
                'green',
                'yellow',
                'blue',
                'red',
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
                     <h2>chart.js -> bar chart</h2> 
                    

                <canvas id="doChart" width="100" height="100"></canvas>

                </div>
        )}
        }
      

export default BubbleChart ;