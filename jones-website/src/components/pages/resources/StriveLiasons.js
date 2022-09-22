import React from 'react'
import './Resources.css';
import { Strive } from './DataSheet';
import ContactGrid from './ContactGrid';


function StriveLiason () {
    return (
        <div className='resource-desc-container'>
            <ContactGrid Info={Strive} />
            <div className='resource-right-box'>
                <h3 className='resource-h3-title'>Strive Liasons</h3>
                <br/>
                <p className='resource-p-text'> STRIVE Coalition is a dedicated group of students who have come together to address sexual and domestic violence on campus.
                We envision a world that is free from inequality and violence, where every person experiences sexuality and relationships
                in healthy and positive ways. Lia   isons are specially trained students who host prevention activities and seek to support
                students by providing information about resources available on and off campus
                </p>
            </div>
        </div>
    )
}

export default StriveLiason