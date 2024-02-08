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
                <div className="superhost">
                    <button>o</button> <label>Superhost</label>
                </div>
                <div className="property-type-div">
                    <label>Property type</label>
                    <select name="property-type" id="property-type-emnu">
                        <option value="a"></option>
                        <option value="b">B</option>
                        <option value="c">C</option>
                        <option value="d">D</option>
                    </select>
                </div>
            </div>
        </div>
    )
}