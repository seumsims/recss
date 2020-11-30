import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Finddomnode extends Component {

    changeIMG(){
        var AuroraIMG = document.getElementById("AuroraIMG");

        ReactDOM.findDOMNode(AuroraIMG).src="https://images.pexels.com/photos/40023/aurora-northern-lights-aurora-borealis-borealis-40023.jpeg";
    }
    render() {
        return (
            <div>
                <button onClick={this.changeIMG} className="btn btn-danger m-5">Change Image</button><br></br>
                <img  id="AuroraIMG"
                src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg"
                className="col-md-5 img-fluid img-thumbnail" alt="img-thumbnail">
                </img>
            </div>
        );
    }
}

export default Finddomnode;