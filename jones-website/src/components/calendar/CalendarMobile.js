import React from 'react'
import { useEffect, useState } from 'react'
import DayView from './DayView'
import { FetchCalendar } from './FetchCalendar'
import moment from 'moment'
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRef } from 'react'
import { IoClose } from 'react-icons/io5'
import { IoMdCalendar } from "react-icons/io";


function CalendarMobile({closeModal}) {
    const [eventsList, setEventsList] = useState([])
    const [selectedDay, setSelectedDay] = useState(new Date())
    const [pickerIsOpen, setPickerIsOpen] = useState(false)
    const datePicker = useRef()
    
    useEffect(()=>{
        FetchCalendar(setEventsList)
    }, [1])

    const handleDatePicker = () => {
        if (pickerIsOpen){
            setPickerIsOpen(false)
            datePicker.current?.setOpen(false)
        }
    };
  return (
    <div className='calendar-mobile-container'>
        <div className='calendar-mobile-header'>
            <div style={{position:'absolute', top:'1rem', left:'2rem', color:'#999'}}>
                <DatePicker 
                ref={datePicker}
                selected={new Date(selectedDay)} 
                onChange={(date) => setSelectedDay(moment(date))} 
                onCalendarOpen={()=>setPickerIsOpen(true)}
                customInput={
                    <IoMdCalendar size={30} />
                    }
            />
            </div>
             
            <button className='exit-button' onClick={closeModal}>
                <IoClose className='exit-icon'/>
            </button>  
        </div>
        <div className='calendar-mobile-header'>
            <button 
            className='mobile-calendar-absolute left-day-carat' 
            onClick={()=>setSelectedDay(moment(selectedDay).subtract(1, 'day'))}
            >
                <BsChevronLeft size={25}/>
            </button>
            <h2 className='mobile-calendar-absolute day-title mobile-day-title'>{moment(selectedDay).format('dddd M/DD')}</h2>
            <button 
                className='mobile-calendar-absolute right-day-carat' 
                onClick={()=>setSelectedDay(moment(selectedDay).add(1, 'day'))}
            >
                <BsChevronRight size={25}/>
            </button>   
            {/* <div className='day-selector-icon'>
                <DatePicker 
                ref={datePicker}
                selected={new Date(selectedDay)} 
                onChange={(date) => setSelectedDay(moment(date))} 
                onCalendarOpen={()=>setPickerIsOpen(true)}
                customInput={
                    <BsCalendar2Fill />
                    }
                style={{zIndex:100}}
                />
            </div> */}
        </div>
        <DayView  selectedDay={selectedDay} eventsList={eventsList} mobile={true}/>
           
    </div>
  )
}

export default CalendarMobile