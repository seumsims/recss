import React, { Component } from 'react';

class List2 extends Component {

myDataItems=(data)=>{

return <option>{data}</option>

}


    render() {

        const fruits = ["Mango","Bananna","Apple","Water Melon"];

        const dataItems = fruits.map(this.myDataItems);

        return (
            <div className="m-5 col-md-5 float-right">
                 <select  className="form-control">{dataItems}</select>
            </div>
        );
    }
}

export default List2;