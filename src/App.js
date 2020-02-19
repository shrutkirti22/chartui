import React from 'react';
import './App.css';

import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import BubbleChart from "./components/BubbleChart";
import InputForm from "./components/InputForm";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Route, Switch } from "react-router";



function App() {
  return (
    <div className="App">
     
                <Router>
                <Route path="/" exact component={LineChart} />
                <Route path="/add" component={InputForm} />
                </Router>

                        {/* <div className="col-lg-4  col-sm-12 "> <LineChart/></div> */}
                        {/* <div className="col-lg-4  col-sm-12"> <BubbleChart/></div>
                        <div className="col-lg-4  col-sm-12"> <PlotlyMarker/></div> */}

      {/* <BarChart/> */}
     
     
      
    </div>
  );
}

export default App;
