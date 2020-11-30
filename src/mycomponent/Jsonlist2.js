import React, { Component } from 'react';

class Jsonlist2 extends Component {
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

        const dataItemsCity = mylist.map((dataCity)=>{
        return <option>{dataCity.city}</option>
        });

        const dataItemsZip = mylist.map((dataZip)=>{
            return <option>{dataZip.zip}</option>
            });

        return (
            <div className="m-5 row">
                
                <div className="col-md-6">

                <select className="form-control">
                    {dataItemsCity}
                </select>

                </div>

                <div className="col-md-6">

                <select className="form-control">
                    {dataItemsZip}
                </select>

                </div>

            </div>
        );
    }
}

export default Jsonlist2;