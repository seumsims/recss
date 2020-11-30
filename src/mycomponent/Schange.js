import React,{Component} from 'react'


class Schange extends Component {

    
constructor() {
    super()

    this.state={
        name: "Seum"
    }

}

changeName(meter) {

    this.setState({
        name:meter
    })


}
    
render() {
        return <div className="m-5"><h1>
        {this.state.name}
        </h1>
        <button onClick={this.changeName.bind(this,"Rain")} className="btn btn-success m-5">
            Change Name</button>
        </div>
    }



}

export default Schange