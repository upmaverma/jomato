import axios from 'axios';
import React, {Component}from 'react';
import './costFilter.css';

const url = "https://restaurentapilive.herokuapp.com/restaurentinfo";

class costFilter extends Component{

    costfilter = (event)=>{
        let cost = (event.target.value).split('-');
        let lcost = cost[0];
        let hcost = cost[1];
        axios.get(`${url}?lcost=${lcost}&hcost=${hcost}`)
        .then((response)=>{this.props.restPerCost(response.data)})
    }
    render(){
        return(
            <>
                <div className="container costFilterArea" onChange={this.costfilter}>
                    <h5 className="filterHeading">Cost</h5>
                    <div className="form-check filterBox">
                        <label>
                            <input type="radio" name="cost" value="" /> All
                        </label>
                    </div>
                    <div className="form-check filterBox">
                        <label className="radio">
                            <input type="radio" name="cost" value="0-300" /> 0-300
                        </label>
                    </div>
                    <div className="form-check filterBox">
                        <label className="radio">
                            <input type="radio" name="cost" value="301-600" /> 301-600
                        </label>
                    </div>
                    <div className="form-check filterBox">
                        <label className="radio">
                            <input type="radio" name="cost" value="601-800" /> 601-800
                        </label>
                    </div>
                    <div className="form-check filterBox">
                        <label className="radio">
                            <input type="radio" name="cost" value="800-3000" /> 800 & Above
                        </label>
                    </div>
                </div>
            </>
        )
    }
}

export default costFilter;