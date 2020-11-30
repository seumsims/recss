import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Newstart extends Component {

    theAction(){

        var container = document.getElementById("Seum");
        var element = <h1>My Name is Seum Uddin</h1>
        var callback = function(){
            alert("SALAM");
        }

        // ReactDom.render(element,container,callback);
        ReactDom.hydrate(element,container,callback);

    }
    render() {
        return (
            <div>
                <button onClick={this.theAction} className="btn btn-primary m-5">
                    Change</button>
                <h1 id="Seum">My Name is Seum</h1>
            </div>
        );
    }
}

export default Newstart;