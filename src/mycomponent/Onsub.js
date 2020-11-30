import React, { Component } from 'react';

class Onsub extends Component {
    constructor(){
        super()
        this.state={
            username: " Here Changes When Input Some Value "
        }
    }

    onChangeHandler=(event)=>{

        var myname = event.target.name;
        var myvalue = event.target.value;
        this.setState({[myname]:myvalue});
    }
    
    onSubmitHandler=()=>{
        alert(this.state.username);
    }

    render() {
        return (
            <div className="m-4 border">
                <form onSubmit={this.onSubmitHandler}>
                    <div className="container col-md-6">
                        
                    <h1 className="alert alert-info"> My First Form </h1>
        <h1>{this.state.username}</h1>
                    <input name="username" onChange={this.onChangeHandler} type="text" placeholder="Your Name">
                    </input>
                    
                    <input className="btn btn-warning" type="submit" value="Form Fil Now">
                    </input>
                    </div>
                </form>
            </div>
        );
    }
}

export default Onsub;