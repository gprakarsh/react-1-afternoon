import React, {Component} from 'react';

class FilterString extends Component{
    constructor(){
        super();
        this.state={
            unfilteredArray:["cat","dog","mouse","kuala","gorrilla"],
            userInput:'',
            filteredArray:[]
        }
    } 
    handleInput(val){
        this.state.userInput=val;
    }
    handlefilterArray(val){
        let arr=this.state.unfilteredArray.slice();
        let i=arr.indexOf(val);
        arr.splice(i,1);
        this.setState({filteredArray:arr});
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unfilteredArray)}</span>
                <input className="inputLine" onChange={e=>this.handleInput(e.target.value)}></input>
                <button className="confirmationButton" onClick={e=>this.handlefilterArray(e.target.value)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString