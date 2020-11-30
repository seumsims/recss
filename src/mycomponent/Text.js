import React, { Component } from 'react';

class Text extends Component {

    constructor(){
        super();

        this.state={
            desc: " Insert Some Text Here ",
            userInput: " "
        }
    }

    onChangeHandler=(event)=>{

        var mytext = event.target.value;
        this.setState({userInput:mytext});
    }


    render() {

        return (

            <div className="m-5">
                <textarea placeholder=" Your Text " onChange={this.onChangeHandler} className="form-control"/>
        <h1>{this.state.userInput}</h1>
            </div>
        
        );

    }
}

export default Text;