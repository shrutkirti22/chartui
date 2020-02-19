
import React, { Component } from 'react';
import axios from 'axios';
import LineChart from "./LineChart";
import BubbleChart from "./BubbleChart";

class InputForm extends Component {
  constructor() {
    super();
    this.state = {
      month: '',
      profit: '',
      isLine: true,
      chartName: '',
    };
    
  }

  // componentDidMount(){
  //   let lineDiv = document.getElementById('lineId');
  //   lineDiv.style.visibility = "hidden";
  //   lineDiv.style.display = "none";
  //   let barDiv = document.getElementById('barId');
  //   barDiv.style.visibility = "hidden";
  //   barDiv.style.display = "none";

  // }


  onChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    // const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { month, profit, isLine } = this.state;

    axios.post('http://localhost:4000/bars/saveForm', { month, profit })
      .then((result) => {
        console.log(result);
        alert("sucess");
        let e = document.getElementById("chartId");
        let strUser = e.options[e.selectedIndex].value;
      this.setState({chartName:strUser})
      if(strUser === "Line"){
      var lineDiv = document.getElementById('lineId');
      lineDiv.style.visibility = "show";
      // lineDiv.style.display = "none";

      }
      else{
        let barDiv = document.getElementById('barId');
      barDiv.style.visibility = "show";
      // barDiv.style.display = "none";

      }

        //access the results here....
      });
  }

  render() {
    const { month, profit, isLine } = this.state;
let showdata;
console.log(this.state.chartName);

    
    if(this.state.chartName === "Line"){
      showdata=(<LineChart />)
    }
    else{
      showdata=(<BubbleChart />)
    }

    return (

    <div className="container" align="center">
      <form onSubmit={this.onSubmit} style={{align:'center'}}>
      <div className="form-group row">
        <label for="inputEmail3" className="col-sm-2 col-form-label">Month</label>
        <div className="col-sm-5">
          <input type="text" className="form-control" name="month" value={month} onChange={this.onChange} placeholder="Month"/>
        </div>
      </div>
      <div className="form-group row">
        <label for="inputPassword3" className="col-sm-2 col-form-label">Profit</label>
        <div className="col-sm-5">
          <input type="number" className="form-control" name="profit" value={profit} onChange={this.onChange}  placeholder="Profit"/>
        </div>
      </div>
      <div className="form-group row">

      <label for="inputPassword3" className="col-sm-2 col-form-label">Chart</label>
      <div className="col-sm-5">
      <select class="custom-select" id="chartId">
       <option selected disabled >Please select chart</option>
       <option value="Line">Line</option>
      <option value="Bar">Bar</option>
  </select>
  </div>
</div>
      
      <div className="form-group row">
        <div className="col-sm-10">
          <button type="submit" className="btn btn-primary">Create Chart</button>
        </div>
      </div>
    </form>

<div className="row">
  <div id="lineId" className="col-lg-6"> <LineChart/></div> 
   <div id="barId" className="col-lg-6"> <BubbleChart/></div>
   </div>
    {/* <div class="container">
  <div class="row">
    <div class="col-lg-6">
   { showdata}
      
    </div>
    <div class="col-lg-6">
    </div>
  </div>

</div> */}
    </div>
                  );
                }
              }
            
    export default InputForm;