import React from "react"
import "./BackDrop.scss"

function BackDrop(props) {
    var style = "backdrop"
    if (window.width <= 800) {
        style+= "__biggerThan800"
    }
    return (
        <div className={style}/>
    )
}

export default BackDrop