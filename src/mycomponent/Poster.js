import React, {Component} from 'react';
import axios from 'axios';

class Poster extends Component {
    constructor() {
        super();
        this.state={
            postData:" ",
            postResult:" "
        }
    }

    onChangeHandler=(event)=>{
        var mydata = event.target.value;
        this.setState({postData:mydata})

    }

    onClickHandler=()=>{

        axios.post('http://show.42web.io/posttest.php',this.state.postData)
        .then(response=>{
            this.setState({postResult:response.data})
            alert(this.state.postResult)
        })
        .catch(error=>{
            alert('Something Went Wrong');
        })

    }

    render() {
        return (
            <div>
                <input onChange={this.onChangeHandler} type="text"/>
                <button onClick={this.onClickHandler}>send post coms</button>
            </div>
        );
    }
}

export default Poster;