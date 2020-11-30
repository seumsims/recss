import React, {Component} from 'react';
import axios from 'axios';

class Countrylist extends Component {

    componentDidMount() {
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response=>{

            console.log(response.data)

        })
            .catch(error=>{
                console.log(error)
        })
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Countrylist;