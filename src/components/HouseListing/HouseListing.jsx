import React from "react"
import GetHouses from "../../services/GetHouses"
import HouseCard from "../HouseCard/HouseCard"
import './HouseListing.css'

export default function HouseListing({data}){

    
    console.log("HouseListing")

    console.log(data)
    const housesReturned = GetHouses()
    let houses = []

    if(data.length === 0) {
        houses = housesReturned  
    } else {
        data.map(filter => {
            console.log(filter)
            const filteredHouse = housesReturned.filter( house => house.location == filter )  
            filteredHouse.map(filtHouse =>  houses.push(filtHouse))
            }
        )
    }

    // if(data == "") {
    //     houses = GetHouses() 
    // } else {
    //     houses = GetHouses().filter( house => house.location == data ) 
    // }

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