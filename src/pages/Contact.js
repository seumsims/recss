import React, { Component } from 'react';

class Contact extends Component {
    
    render() {
        const TextStyle = {
            backgroundColor: "green",
            color: "white",
            margin: "40px",
            padding: "30px"
        }
/*
        const classNames = {
            display1: "display-1",
            textcenter: "text-center"
        } */
        return (
            <div>
                <h1 style={TextStyle} className="display-1 text-center"> Contact </h1>
            </div>
        );
    }
}

export default Contact;