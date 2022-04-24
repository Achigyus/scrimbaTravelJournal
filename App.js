import React from "react"
import Navbar from "./Navbar"
import Card from "./Card"
import data from "./data"

const array = data.map((items)=>{
    return <Card 
        {...items}
    />
})

export default function App() {
    return (
        <div className="container" >
            <Navbar />
            {array}
        </div>
    )
}