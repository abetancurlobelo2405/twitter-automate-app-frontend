import Cookies from "js-cookie";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Input, InputContainer, InputLength, ThreadContainer, TweetButton } from "./ThreadComponentElements";
import {BsTwitter} from "react-icons/bs"

const ThreadComponent = (props) => {
  const token = Cookies.get("userID")
  const {result, headerText, dateValues, error, isSchedule} = props
  const [finalResult, setFinalResult] = useState([])

  useEffect(() => {
      const resultToArray = result.split("\n");
      const filterEmptyStrings = resultToArray.filter(Boolean);
      setFinalResult(filterEmptyStrings)
  }, [result])

  useEffect(() => {
    window.sessionStorage.setItem("tweetResult", JSON.stringify(Array.from(finalResult)))
  }, [finalResult])

  const postThread = async() => {
    const response = await fetch("https://twitterautomation.up.railway.app/twitter/login/post-thread", {
        method: "POST",
        headers: {"Content-Type":"application/json", "authorization": token},
        body: JSON.stringify({result:finalResult, headerText: headerText ? headerText : undefined, dateValues, isSchedule})
      })
      if(response.status >= 400){
        Cookies.remove("userID")
        alert("An error ocurred, please log in and try again.")
        window.location.href = "/"
      }
      if(response.status === 200){
        alert("Tweet thread created!!")
      }
  }
 
  const handleInputChange = (element, index) => {
    const updatedResult = [...finalResult];
    updatedResult[index] = element.target.value;
    setFinalResult(updatedResult);
  }



  return (
  <>
  <ThreadContainer>
    <InputContainer>
      {finalResult.map((individualResult, index) => (
        <InputContainer>
          <Input totalLength={individualResult.length} 
          type="text" 
          onChange={(e) => handleInputChange(e, index)} 
          value={individualResult}/>
          <InputLength>{individualResult.length}/280</InputLength>
        </InputContainer>
      ))}
    </InputContainer>
    <TweetButton buttonError={error} onClick={postThread}>{
    isSchedule && 
    dateValues.days > 0 
    || dateValues.hours > 0 
    || dateValues.minutes > 0 ? <>¡SCHEDULE THIS TWEET!</> : <>¡TWEET IT NOW!</>}<BsTwitter/></TweetButton>
  </ThreadContainer>
  </>
  );
};

export default ThreadComponent;
