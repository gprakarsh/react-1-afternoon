import React, {Component} from 'react';

class EvenAndOdd extends Component{
    constructor(){
        super();
        this.state={
        evenArray:[],
        oddArray:[],
        userInput:""
        }
    }
    handleChange(val){
        this.setState({userInput: val});
    }
    assignEvenAndOdd(userInput){
        var arr = userInput.split(',');
        var evens = [];
        var odds = [];
        for(var i=0;i<arr.length;i++){
            if(arr[i]%2===0){
                evens.push(parseInt(arr[i]));
            }
            else{
                odds.push(parseInt(arr[i]));
            }
        }
        this.setState({evenArray:evens,oddArray:odds});    
    }

    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input className="inputLine" onChange={e=>this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={()=>this.assignEvenAndOdd(this.state.userInput)}>Split</button>
            <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
            <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span> 
            </div>
        )
    }
}

export default EvenAndOdd