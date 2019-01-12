import React, {Component} from 'react';

class Sum extends Component{
    constructor(){
        super();
        this.state={
            num1:0,
            num2:0,
            sum:null
        }
    }
    handleNum1(val){
        this.setState({num1:val});
    }
    handleNum2(val){
        this.setState({num2:val});
    }
    handleSum(a,b){
        let s=parseInt(a)+parseInt(b);
        this.setState({sum:s});
    }
    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={e=>this.handleNum1(e.target.value)}></input>
                <input className="inputLine" onChange={e=>this.handleNum2(e.target.value)}></input>
                <button className="confirmationButton" onClick={()=>this.handleSum(this.state.num1,this.state.num2)}>Sum</button>
                <span className="resultsBox">Sum: {this.state.sum} </span>
            </div>            
        )
    }
}

export default Sum