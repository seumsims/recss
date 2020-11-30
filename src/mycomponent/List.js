import React, { Component } from 'react';

class List extends Component {

    


    render() {

        const fruits = ["Mango","Bananna","Apple","Water Melon"];

        const dataItems = fruits.map((mydata)=>{

        return <option>{mydata}</option>

        });

        return (
            <div className="m-5 col-md-5 float-right">
                 <select  className="form-control">{dataItems}</select>
            </div>
        );
    }
}

export default List;