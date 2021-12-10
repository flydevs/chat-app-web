import React from "react"
import "./BackDrop.scss"

function BackDrop(props) {
    var styling= {zIndex: ""}
    if (window.width <= 800) {
        styling.backgroundColor= "Black"
        styling.opacity= "0.50"
    }
    return (
        <div className='backdrop' style={styling}/>
    )
}

export default BackDrop