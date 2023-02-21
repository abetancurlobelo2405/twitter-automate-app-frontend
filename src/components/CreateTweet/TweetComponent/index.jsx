import Cookies from "js-cookie";
import React, { useState } from "react";
import { useEffect } from "react";
import { InputLength } from "../ThreadComponent/ThreadComponentElements";
import { Tweet, TweetButton } from "./TweetComponentElements";

const TweetComponent = (props) => {
  const {result, headerText, dateValues, error, isSchedule, isThread, submitTweet} = props
  const token = Cookies.get("userID")
  const [finalResult, setFinalResult] = useState([])

  useEffect(() => {
      setFinalResult(result)
  }, [result])

  useEffect(() => {
    if(!isThread && submitTweet !== undefined){
      console.log("wtf????????????????????normal?")
      fetch(`${import.meta.env.VITE_URL}/twitter/login/post-tweet`, {
        method: "POST",
        headers: {"Content-Type":"application/json", "authorization": token},
        body: JSON.stringify({result:finalResult, headerText: headerText ? headerText : undefined, dateValues, isSchedule})
      }).then(response => {
        if(response.status === 400 ||  response.status === 401){
          Cookies.remove("userID")
          console.log("An error ocurred, please log in and try again.")
          window.location.href = "/"
        }
        if(response.status === 403){
          console.log(response)
          console.log("You cant tweet duplicated content")
        }
        if(response.status === 201){
          console.log("Tweet thread created!!")
        }
      })
    }
  }, [submitTweet])

  const handleInputChange = (element) => {
    setFinalResult(element.target.value);
  }

  
  return (
  <>
  {finalResult.length > 280 ? <p style={{ color:"#ff2424" }}>This tweet exceeds 280 characters per tweet allowed by twitter, please use a thread of tweets instead of a normal tweet</p> : undefined}
  <Tweet
    inputLength={finalResult.length}
    type="text" 
    onChange={handleInputChange} 
    value={finalResult}/>
    <InputLength inputLength={finalResult.length}>{finalResult.length}</InputLength>
  </>);
};

export default TweetComponent;
