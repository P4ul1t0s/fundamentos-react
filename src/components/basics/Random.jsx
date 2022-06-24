import React from "react"

export default (p) => {
    var min = Math.ceil(p.min);
    var max = Math.floor(p.max);
    var res = Math.floor(Math.random() * (max - min)) + min
    return <p>{res}</p> 
}