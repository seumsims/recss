import React,{Component} from 'react'

class Conditional2 extends Component {

    constructor() {
        super()

        this.state={
            login: true
        }
    }
    render() {
        
       return(
        this.state.login ? (
            
            <h1> This is First </h1>

        )  
        : 
        
        (

            <h1> This is 2nd </h1>

        )
       
        )
    }
}

export default Conditional2