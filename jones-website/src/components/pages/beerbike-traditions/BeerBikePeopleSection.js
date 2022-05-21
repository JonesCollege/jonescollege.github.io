import React from 'react'
import BeerBikePeople from "./BeerBikePeople"
import "./BeerBikePeopleSection.css"

const BeerBikePeopleSection = () => {
    const green = "#2B7632";
    const purple = "#715AA0"

  return (
    <div className = "section">
        <div className="group">
            <div className="heading" style = {{color:{green}}} >Beer Bike Coords</div>
            <div className="row">
                <BeerBikePeople name = "taya laysota" email = "taya@rice.edu" color = {green}/> 
                <BeerBikePeople name = "taya laysota" email = "taya@rice.edu" color = {green}/> 
                <BeerBikePeople name = "taya laysota" email = "taya@rice.edu" color = {green}/> 
            </div>
            
            <div className="row">
                <BeerBikePeople name = "taya laysota" email = "taya@rice.edu" color = {green}/> 
                <BeerBikePeople name = "taya laysota" email = "taya@rice.edu" color = {green}/> 
                <BeerBikePeople name = "taya laysota" email = "taya@rice.edu" color = {green}/> 
            </div>
        </div>

        <div className="group">
            <div className="heading" style = {{color:{green}}} >Bike Captains</div>
            <div className="row">
                <BeerBikePeople name = "taya laysota" email = "taya@rice.edu" color = {purple}/> 
                <BeerBikePeople name = "taya laysota" email = "taya@rice.edu" color = {purple}/> 
                
            </div>
            
            <div className="row">
                <BeerBikePeople name = "taya laysota" email = "taya@rice.edu" color = {purple}/> 
                <BeerBikePeople name = "taya laysota" email = "taya@rice.edu" color = {purple}/> 
                
            </div>

        </div>

        <div className="group">
            <div className="heading" >chug captains</div>
            <div className="row">
                <BeerBikePeople name = "taya laysota" email = "taya@rice.edu" /> 
         
            </div>
            
            <div className="row">
                <BeerBikePeople name = "taya laysota" email = "taya@rice.edu" /> 
                
            </div>

        </div>
    </div>
  )
}

export default BeerBikePeopleSection