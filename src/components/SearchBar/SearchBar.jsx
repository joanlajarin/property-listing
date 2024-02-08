import React from "react"
import './SearchBar.css'
import { useState, useEffect } from "react"


export default function SearchBar({onSearch}){

    const [filters, setFilters] = useState([])


    useEffect(() => {
        const handleClick= (filterEl)=> {

            const filter = filterEl.srcElement.innerHTML
            filterEl.target.classList.toggle('active')
            if(filter != "All Stays") {
           //     console.log(aFilters[0].classList.toggle('active'))
                aFilters[0].classList.remove('active')
                setFilters(prevFilters => {
                    if (prevFilters.includes(filter)) {
                      return prevFilters.filter(item => item !== filter);
                    } else {
                      return [...prevFilters, filter];
                    }
                  })
            } else {
                console.log("filters")
                console.log(filters)
                for(let i = 1; i < aFilters.length;i++ ){
                    aFilters[i].classList.remove('active')
                }
                setFilters([]);
            }
        }
        const aFilters = document.querySelectorAll(".btn-filter")
        aFilters.forEach(filterEl => {
            filterEl.addEventListener("click",handleClick)
        })
        },[])


        useEffect(() => {
            // Call onSearch with the current filters whenever filters change
            onSearch(filters);
          }, [filters, onSearch]);
        

    return(
        <div className="searchbar"> 
            <div className="filters-searchbar">

            {/* <a onClick={() => handleClick('')} className="btn-filter" autoFocus>All Stays</a>
                <a onClick={() => handleClick('Norway')} className="btn-filter">Norway</a>
                <a onClick={() => handleClick('Finland')} className="btn-filter">Finland</a>
                <a onClick={() => handleClick('Sweden')} className="btn-filter">Sweden</a>
                <a onClick={() => handleClick('Switzerland')} className="btn-filter">Switzerland</a> */}
                <a className="btn-filter active">All Stays</a>
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
                        <option value="1-bedroom">1 bedroom</option>
                        <option value="2-bedroom">2 bedroom</option>
                    </select>
                </div>
            </div>
        </div>
    )
}