import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import ThreadComponent from '../ThreadComponent'
import TweetComponent from '../TweetComponent'
import { 
 
  AcceptButton,
  Date,
  DateInput,
  DatesContainer,
  DateValue,
  MaxDates,
  PublishedTitle,
  ScheduleData, 
  } from './DatesSchedulerElements'

const DatesScheduler = (props) => {
  const {isSchedule, datesHandler, dateValues, error, isScheduleSubmitHandler} = props

  const scheduleHandler = () => {

  }

  return (
  <>
  {isSchedule ? 
    <DatesContainer>
      <Date>
        <MaxDates>Max. 6 days</MaxDates>
        <DateInput type="number" placeholder='Days' name="days" min={0} max={6} onChange={(e) => datesHandler(e)} value={dateValues.days}/>
      </Date>

      <Date>
        <MaxDates>Max. 23 hours</MaxDates>
        <DateInput type="number" placeholder='Hours' name="hours" min={0} max={23} onChange={(e) => datesHandler(e)} value={dateValues.hours}/>
      </Date>

      <Date>
        <MaxDates>Max. 59 minutes</MaxDates>
        <DateInput type="number" placeholder='Minutes' name="minutes" min={0} max={59} onChange={(e) => datesHandler(e)} value={dateValues.minutes}/>
      </Date>

      {error 
        ? <>Correct the dates to schedule</> 
        : <>            
        {dateValues.days > 0 || dateValues.hours > 0 || dateValues.minutes > 0 
          ? <>
              <PublishedTitle>THIS WILL BE PUBLISHED IN</PublishedTitle>
              <DateValue>
                <span>{dateValues.days > 0 ? `${dateValues.days} day${dateValues.days > 1 ? "s" : ""} ` : undefined}</span>
                <span>{dateValues.hours > 0 ? `${dateValues.hours} hours ` : undefined}</span>
                <span>{dateValues.minutes > 0 
                  ? `${dateValues.hours > 0 || dateValues.days > 0 ? `and` : ""} ${dateValues.minutes} minutes ` 
                  : undefined}
                </span>
              </DateValue> 
              <AcceptButton onClick={() => isScheduleSubmitHandler(true)}>ACCEPT</AcceptButton>
            </>
          : undefined}
      </>}
      
    </DatesContainer>
  : undefined}
  </>
  )
}

export default DatesScheduler;