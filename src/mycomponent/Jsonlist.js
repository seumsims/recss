import React, { Component } from 'react';

class Jsonlist extends Component {
    render() {

        const mylist = [
            {
                city: "Dhaka",
                zip: 6000
            },

            {
                city: "Rajshahi",
                zip: 5000
            },

            {
                city: "Rangpur",
                zip: 4000
            }
        ]

        const dataItems = mylist.map((data)=>{
        return <option>{data.city}</option>
        });

        return (
            <div className="m-5 col-md-5 float-right">
                <select className="form-control">
                    {dataItems}
                </select>
            </div>
        );
    }
}

export default Jsonlist;