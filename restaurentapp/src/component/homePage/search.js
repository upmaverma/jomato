import React, { Component } from 'react';
import './search.css';
import axios from 'axios';
import {withRouter} from 'react-router-dom';


const url = "https://restaurentapilive.herokuapp.com/location";
const resturl = "https://restaurentapilive.herokuapp.com/restaurentinfo?city="


class search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            city: '',
            restaurent:''
        }
    }
    renderCity = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <>
                        <option value={item._id}>{item.city_name}</option>
                    </>
                )
            })
        }
    }
    handleCity = (event) => {
        const id = event.target.value;
        axios.get(`${resturl}${id}`)
        .then((response)=>{
            this.setState({restaurent:response.data})
        })
    }
    renderRestaurent = (data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <>
                        <option value={item._id}>
                            {item.name} --- {item.locality}
                        </option>
                    </>
                )
            })
        }
    }
    handleRestaurent = (event)=>{
        this.props.history.push(`/details/${event.target.value}`)
    }
    render() {
        return (
            <>
                <div className="conatiner-fluid header">
                    <div className="headerContent">
                        <div className="symbol">
                            <img src={`images/logo.png`} alt="symbol" className="animatedSymbol" />
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <h1 className="contentHeading">Find best restaurent and cafes near you</h1>
                            </div>
                        </div>
                        <div className="container searchArea">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <select onChange={this.handleCity} className="form-control" id="selectCity">
                                            <option value="1">Select Your City</option>
                                            {this.renderCity(this.state.city)}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <select className="form-control" id="selectRestaurent" onChange={this.handleRestaurent}>
                                            <option value="1">Select Your Restaurent</option>
                                            {this.renderRestaurent(this.state.restaurent)}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    componentDidMount() {
        axios.get(url)
            .then((response) => {
                this.setState({ city: response.data })
            })
    }
}
export default withRouter(search);