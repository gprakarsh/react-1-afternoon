import React, {Component} from 'react';
import Palindrome from './../Topics/Palindrome';
import Sum from "./../Topics/Sum";
import FilterString from "./../Topics/FilterString";
import FilterObject from "./../Topics/FilterObject";
import EvenAndOdd from "./../Topics/EvenAndOdd";



class TopicBrowser extends Component{
    render(){
        return(
                <div>
            <EvenAndOdd/>
            <FilterObject/>
            <FilterString/>
            <Sum/>
            <Palindrome/>
        </div>
        )
    }
}

export default TopicBrowser