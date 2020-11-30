import React, { Component } from 'react';

class Form extends Component {

    constructor(){
        super()
        this.state={
            name: " Here Changes When Input Some Value "
        }
    }

    onChangeHandler=(event)=>{

        var newName = event.target.value;
        this.setState({name:newName});
    }

    render() {
        return (
            <div className="m-4">
                <form>
                    <div className="container col-md-6">
                        
                    <h1 className="alert alert-info"> My First Form </h1>
        <h1>{this.state.name}</h1>
                    <input onChange={this.onChangeHandler} type="text" placeholder="Your Name">
                    </input>
                    
                    <input className="btn btn-warning" type="submit" value="Form Fil Now">
                    </input>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;