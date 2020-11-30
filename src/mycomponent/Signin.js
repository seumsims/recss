import React, { Component } from 'react';

class Signin extends Component {

    constructor(){

        super();

        this.state={

            fname: "  ",
            lname: " ",
            email: " ",
            mobile: " "

        }

    }

    onChangeHandler=(event)=>{

        var inputName = event.target.name;
        var inputValue = event.target.value;

        this.setState({[inputName]:inputValue});

        if(inputName === "fname") {

            var namePattern = /^([a-zA-Z]){2,38}$/;

            if(!namePattern.test(inputValue)){

                this.setState({fname: " First Name is not Valid "});
            }

        }

        if(inputName === "lname") {

             var namePattern2 = /^([a-zA-Z]){2,38}$/;

            if(!namePattern2.test(inputValue)){

                this.setState({lname: " Last Name is not Valid "});
            }
            
        }

        if(inputName === "email") {

            var emailPattern = /\S+@\S+\.\S+/;

            if(!emailPattern.test(inputValue)){

                this.setState({email: " Email is not Valid "});
            }
            
        }

        if(inputName === "mobile") {

            if(!Number(inputValue)) {

                this.setState({mobile: " Mobile no. is not Valid "});


            }
            
        }

    }

    render() {

        return (

            <div className="form-group m-4">

                <div className="row border border-success m-4">

                    <div className="col-md-6">
                        First Name : {this.state.fname}
                    </div>

                    
                    <div className="col-md-6">
                        Last Name : {this.state.lname} 
                    </div>

                    <div className="col-md-6">
                        Email : {this.state.email}
                    </div>

                    
                    <div className="col-md-6">
                        Mobile : {this.state.mobile}
                    </div>

                    

                </div>

                <div className="container col-md-6  border border-info">
                    <form>

                        

                <br></br>
                <input onChange={this.onChangeHandler} name="fname" type="text" className="form-control" placeholder=" Your Name ">
                </input>
                <br></br>

                
                <input onChange={this.onChangeHandler} name="lname" type="text" className="form-control" placeholder=" Your Name ">
                </input>
                <br></br>

                
                <input onChange={this.onChangeHandler} name="email" type="text" className="form-control" placeholder=" Email ">
                </input>
                <br></br>

                
                <input onChange={this.onChangeHandler} name="mobile" type="text" className="form-control" placeholder=" Mobile Number ">
                </input>
                <br></br>

                
                <input name="signin" type="submit" className="form-control" value=" Save Now ">
                </input>
                <br></br>

                </form>

                </div>

            </div>
        );
    }
}

export default Signin;