import React, {Component} from 'react';
import Mapgetcdata from "../mycomponent/Mapgetcdata";
import Countrylist from "../mycomponent/Countrylist";

class Jsonrest extends Component {
    render() {
        return (
            <div>
                <div>
                    <Countrylist/>
                </div>

                <div>
                    <Mapgetcdata/>
                </div>
            </div>
        );
    }
}

export default Jsonrest;