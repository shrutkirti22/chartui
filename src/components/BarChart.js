import React from "react";
import { Bar } from 'react-chartjs-2';  
import axios from 'axios';  
// const axios = require('axios');


class BarChart extends React.Component
{
    constructor(props){
        super(props);
        this.state= {data :{}};
    }

    componentDidMount(){
var url ="http://localhost:4000/bars/Getrecord"
        axios.get(url)  
                            .then(res => {  
                                        console.log(res);  
                                        const ipl = res.data;  
                                        let playername = [];  
                                        let runscore = [];  
      
                                        ipl.forEach(record => {  
                                                playername.push(record.playerName);  
                                                runscore.push(record.runs);  

                                        });  
        
        this.setState({  
            Data: {  
                    labels: playername,  
                    datasets: [  
                            {  
                                    label: 'IPL 2018/2019 Top Run Scorer',  

                                    data: runscore,  

                                    backgroundColor: [  
                                            "#3cb371",  
                                            "#0000FF",  
                                            "#9966FF",  
                                            "#4C4CFF"
                                            
                                                     ]  
                            }  
                        ]  
                }  
             });  

            })

    }
    render(){
        return(
               

                <div>  

                    
                 <h2>BarChart -React - chart.js</h2>
                     <Bar data={this.state.Data} 
                     width={20}
                     height={200}
                     options={{ maintainAspectRatio: false ,
                     scales: {

                     yAxes: [{
                        display: true,
                        ticks: {
                            beginAtZero: true,
                            max: 100,
                            min:0
                        }
                    }]
                }
            } 
                     } >
                     </Bar>  
                 </div>  
                
        );
    }
}

export default BarChart;