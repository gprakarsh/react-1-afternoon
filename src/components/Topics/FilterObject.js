import React, {Component} from 'react';

class FilterObject extends Component{
    constructor(){
        super();
        this.state={
            unFilteredArray:[{name:"Prakarsh",hairColor:"Dark Brown"},
                             {name:"Mark",location:"New Jersey",spectacles:true},
                             {name:"Jordan", location:"Cincinnati"},
                             ],
            userInput:"",
            filterArray:[]
        }
    }
handleInput(val){
    this.setState({userInput:val});
    }
filterFriends(val){
    let arr=this.state.unFilteredArray;
    let newArr=[];
    for(let i=0;i<arr.length;i++){
             if(arr[i].hasOwnProperty(val)){
                newArr.push(arr[i]);
            }
        }    
this.setState({filteredArray:newArr})    
}
    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original:{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={e=>this.handleInput(e.target.value)}></input>
                <button className="confirmationButton" onClick={()=>this.filterFriends(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">
                Filtered: {JSON.stringify(this.state.filteredArray,null,10)}</span>
            </div>
        )
    }
}

export default FilterObject