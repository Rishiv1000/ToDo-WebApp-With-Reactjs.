import React from "react";  


function Note(props){

    function handleCLick(id){
        props.onDelete(props.id)
    }

    return <div className="note">
        <h1>{props.name }</h1>
        <p>{props.para}</p>
        <button onClick={handleCLick}>Delete</button>
    </div>
}

export default Note