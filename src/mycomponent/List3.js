import React, { Component } from 'react';

class List3 extends Component {
    myDataItems=(data)=>{

        return <option>{data*10}</option>
        
        }
        
        
            render() {
        
                const numbers = [1,2,3,4,5,6,7,8,9];
        
                const numItems = numbers.map(this.myDataItems);
        
                return (
                    <div className="m-5 col-md-5 float-right">
                         <select  className="form-control">{numItems}</select>
                    </div>
                );
            }
}

export default List3;