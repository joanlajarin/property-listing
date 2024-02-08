import React from "react"
import GetHouses from "../../services/GetHouses"

export default function HouseListing(){
    const houses = GetHouses() 

    return (
        <div className="house-listing">
            <h1>Over 200 stays</h1>
        </div>
    )
}