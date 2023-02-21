import Cookies from 'js-cookie'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ScheduleCard, ScheduleContainer, ScheduleDate, SingleTweet, Tweet, TweetContainer } from './ProfileElements'
import {MdSchedule} from "react-icons/md"
import { Navigate, useNavigate } from 'react-router-dom'

const Profile = () => {
  const token = Cookies.get("userID")
  if(!token){
    return <Navigate to="/" replace/>
  }

  const [userTweets, setUserTweets] = useState([])
  const [userData, setUserData] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/user-data/`, {
      method:"POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({token})
    }).then(async(response) => {
      if(response.status === 401){
        navigate("/sign-in")
      }
      await response.json()
    }).then(data => {
      data?.scheduleTweets?.length > 0 && data.scheduleTweets.map(tweet => {
        setUserTweets(prev => [...prev, {result:tweet.result, date:tweet.date}])
      })
    })
  }, [])


return (
    <>
      <h2>Your schedule tweets</h2>
      <ScheduleContainer>
        {userTweets?.length > 0 
        ? userTweets?.map((tweet, index) => (
          <TweetContainer>
          <ScheduleCard key={index}>
           {Array.isArray(tweet.result) ? tweet.result.map((tweetThread, index) => (
            <div key={index}>
              <Tweet>{tweetThread}</Tweet>
            </div>)) : <SingleTweet>{tweet.result}</SingleTweet>}
          </ScheduleCard>
            <h4>This {Array.isArray(tweet.result) ? <>thread of tweets</> : <>single tweet</>} will be published on:</h4>
            <ScheduleDate><MdSchedule style={{ marginRight:"4px" }}/>{tweet.date} (UTC)</ScheduleDate>
          </TweetContainer>
        ))
        : <p>No scheduled TWEETS!</p>}
      </ScheduleContainer>
    </>
  )
}

export default Profile