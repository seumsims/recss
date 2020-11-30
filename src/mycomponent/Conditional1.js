import React,{Component} from 'react'

class Conditional1 extends Component {

    constructor() {
        super()

        this.state={
            login: true
        }
    }
    render() {
        
        if(this.state.login === true) {
            return (
                <button className="btn btn-primary m-5">LOGOUT Button</button>
            )
        }

        else{

            return(
                <button className="btn btn-danger m-5">Login NOW</button>
            )
        }
    }
}

export default Conditional1