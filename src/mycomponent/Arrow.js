import React from 'react'

/*
function bow() {

    return(

        <button>My Button</button>

    )
}
*/

const AlertMe=(meter)=>{

    alert(meter)


}

const Bow=()=>{

    return(

        <button onClick={AlertMe.bind(this,"this is send from bow")} className="btn btn-danger m-5">My Button</button>


    )
}

export default Bow