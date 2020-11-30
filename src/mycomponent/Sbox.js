import React,{Component} from 'react'

class Sbox extends Component {

    constructor() {
        super()

        var Datum = {

            name: " মুহাম্মাদ সিয়াম উদ্দিন ",
            age: [10,13,15,20,27],
            height: " 5 feet 6 inch ",
            weight: {

                boy: [10,13,15,20,27],
                teen: " 40 KG ",
                adult: " 27 KG " 



            }
        }

        this.state= Datum
    }

    render() {

           return <h1>
                <span className="mark alert alert-success">
                     { this.state.name }  
                     { this.state.age[4] } 
                     { this.state.height } 
                     { this.state.weight.boy[4] } 
                </span> 
                <div className="m-2"> This is Sbox </div>
                </h1>

    }

}

export default Sbox