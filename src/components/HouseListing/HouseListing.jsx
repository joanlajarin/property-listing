import React from "react"
import GetHouses from "../../services/GetHouses"
import HouseCard from "../HouseCard/HouseCard"
import './HouseListing.css'

export default function HouseListing(){
    const houses = GetHouses() 
    console.log("houses " + houses)


    return (
        <section className="main-house-listing">
            <div className="house-listing">
            <h1 className="title-house-listing">Over 200 stays</h1>
            <div className="list-houses">
            {
                houses ? ( 
                    houses.map(house => <HouseCard key={house.id }house={house}/>
                )) : (
                    <p>Loading...</p>
                  )
            }
            </div>
        </div>
        </section>
    )
}