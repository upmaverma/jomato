import React from 'react';
import axios from 'axios';
import { Component } from 'react';
import './costFilter.css'

const url = "https://restaurentapilive.herokuapp.com/restaurentinfo?sort=";

class sortfilter extends Component {
    sortFilter = (event) => {
        let sorting = Number(event.target.value);
        axios.get(`${url}${sorting}`)
            .then((response) => { this.props.restPerSort(response.data) })
    }

    render() {
       
        return (
            <>
                <div className="container sortContainer" onChange={this.sortFilter}>
                    <h5 className="filterHeading">Sort</h5>
                    <div className="form-check">
                        <label className="sort">
                            <input type="radio" name="sort" value="1" /> Price Low to High
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="sort">
                            <input type="radio" name="sort" value="-1" /> Price High to Low
                        </label>
                    </div>
                </div>
            </>
        )
    }
}
export default sortfilter;