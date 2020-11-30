import React,{Component} from 'react'

class Refresh extends Component {

    constructor(){
        super()
        this.refreshNow = this.refreshNow.bind(this)
    }

    refreshNow() {
        this.forceUpdate()
    }

    render() {

        return(

            <div>
                <button onClick={this.refreshNow} className="btn btn-success m-5">
                    Refresh Button
                    </button>
        <h1>{Math.random()}</h1>
            </div>
        )
    }
}

export default Refresh