import React, {Component} from 'react';

class Palindrome extends Component{
    constructor(){
        super();
        this.state={
            userInput:'',
            palindrome:''
        }
    }
    handleInput(val){
        this.state.userInput=val;
    }
    handleFilter(val){ 
        if(val.toLowerCase()===val.split('').reverse().join('').toLowerCase()){
            this.setState({palindrome:'true'});
        }
        else{
            this.setState({palindrome:'false'});
        }
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input className="inputLine" onChange={e=>this.handleInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={()=>this.handleFilter(this.state.userInput)}>Filter</button>
            <span className="resultsBox">Answer: {this.state.palindrome} </span>
            </div>
        )
    }
}

export default Palindrome