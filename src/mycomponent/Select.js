import React, { Component } from 'react';

class Select extends Component {

    constructor(){
        super();

        this.state={
            city1: "Dhaka",
            city2: "Rajshahi",
            city3: "Khulna",
            city4: "Rangpur",
            show: " Show ",

            auto: "Rajshahi"
        }
    }

    onChangeHandler=(event)=>{

        var selectedValue = event.target.value;
        this.setState({show:selectedValue, auto:selectedValue});

    }
    
    
    render() {
        return (
            <div className="m-5 col-md-5 float-right">
                <div className="h3 border border-success">{this.state.show}</div>
                <div>
                <select onChange={this.onChangeHandler} value={this.state.auto}  className="form-control">
                    <option>{this.state.city1}</option>
                    <option>{this.state.city2}</option>
                    <option>{this.state.city3}</option>
                    <option>{this.state.city4}</option>
                </select>
                </div>
            </div>
        );
    }
}

export default Select;