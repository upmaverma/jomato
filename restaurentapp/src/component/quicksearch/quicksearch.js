import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './quicksearch.css';

const url = "https://restaurentapilive.herokuapp.com/mealtime";

class quicksearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mealtime: ''
        }
    }
    renderMenuTime = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <>
                        <Link to={`listing/${item._id}`}>
                            <div className="mealCard">
                                <div className="card">
                                    <img src={item.pic} className="card-img-top img-responsive menuTimePic" alt="food" />
                                    <div className="card-body">
                                        <h3 className="card-title">{item.name}</h3>
                                        <p className="card-text">enjoy the superoir {item.name} with special offers</p>
                                        <a className="btn btn-warning" href="/">{item.name}</a>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </>
                )
            })
        }
    }
    render() {
        return (
            <>
                <div className="conatiner-fluid quicksearchContent">
                    <h2 className="quickSectionHeading">Quick Search </h2>
                    <p className="quickSectionPara">Based on your mealtime :</p>
                    <div className="container mealtimeContainer">
                        <div className="mealCardContainer">
                            {this.renderMenuTime(this.state.mealtime)}
                        </div>
                    </div>
                </div>
            </>
        )
    }
    componentDidMount() {
        axios.get(url)
            .then((response) => {
                this.setState({ mealtime: response.data })
            })
    }

}
export default quicksearch;