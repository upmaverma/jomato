import axios from 'axios';
import React, { Component } from 'react';
import './costFilter.css';

const url = "https://restaurentapilive.herokuapp.com/restaurentinfo?mealtype=";

class mealfilter extends Component {
    mealFilter = (event)=>{
        let mealId = event.target.value;
        axios.get(`${url}${mealId}`)
        .then((response)=>{this.props.restPerMeal(response.data)})
    }
    render() {
        return (
            <>
                <div className="container mealContainer" onChange={this.mealFilter}>
                    <h5 className="filterHeading">Cuisine</h5>
                    <div className="form-check">
                        <label className="radio">
                            <input type="radio" value="" name="cuisine" /> All
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="radio">
                            <input type="radio" value="1" name="cuisine" /> North Indian
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="radio">
                            <input type="radio" value="2" name="cuisine" /> South Indian
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="radio">
                            <input type="radio" value="3" name="cuisine" /> Chinese
                        </label>
                    </div>
                </div>
            </>
        )
    }
}
export default mealfilter;