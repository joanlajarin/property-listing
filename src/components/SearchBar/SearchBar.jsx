import React from "react"
import './SearchBar.css'

export default function SearchBar(){
    
    return(
        <div className="searchbar"> 
            <div className="filters-searchbar">
                <a className="btn-filter">All Stays</a>
                <a className="btn-filter">Norway</a>
                <a className="btn-filter">Finland</a>
                <a className="btn-filter">Sweden</a>
                <a className="btn-filter">Switzerland</a>
            </div>
            <div className="other-filters">
                <div>

                </div>
                <div>
                    Property type
                    <label for="property-type">Property type</label>
                    <select name="property-type" id="property-type-emnu">
                        <option value="volvo">A</option>
                        <option value="saab">B</option>
                        <option value="opel">C</option>
                        <option value="audi">D</option>
                    </select>
                </div>
            </div>
        </div>
    )
}