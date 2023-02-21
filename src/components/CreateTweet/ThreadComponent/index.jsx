import Cookies from "js-cookie";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Input, InputContainer, InputLength, ThreadContainer, TrashContainer, TweetButton, VerticalLine } from "./ThreadComponentElements";
import {BsFillTrashFill} from "react-icons/bs"

const ThreadComponent = (props) => {
  const token = Cookies.get("userID")
  const {result, headerText, dateValues, error, isSchedule, isThread, submitTweet} = props
  const [finalResult, setFinalResult] = useState([])

  useEffect(() => {
      const resultToArray = result.split("\n");
      const filterEmptyStrings = resultToArray.filter(Boolean);
      setFinalResult(filterEmptyStrings)
  }, [result])
  
  useEffect(() => {
    if(isThread && submitTweet !== undefined){
      console.log("wtf????????????????????threaddd?", submitTweet)
        fetch(`${import.meta.env.VITE_URL}/twitter/login/post-thread`, {
          method: "POST",
          headers: {"Content-Type":"application/json", "authorization": token},
          body: JSON.stringify({result:finalResult, headerText: headerText ? headerText : undefined, dateValues, isSchedule})
        }).then((response) => {
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
 
  const handleInputChange = (element, index) => {
    const updatedResult = [...finalResult];
    updatedResult[index] = element.target.value;
    setFinalResult(updatedResult);

  }

  const handleDeleteTweet = (index) => {
    finalResult.splice(index, 1);
    setFinalResult([...finalResult]);
  }

  return (
  <>
  <ThreadContainer>
      {finalResult.map((individualResult, index) => (
        <>
        <InputContainer>
          <VerticalLine/>
          <TrashContainer>
            <BsFillTrashFill style={{width:"12px"}} onClick={() => handleDeleteTweet(index)}/>
          </TrashContainer>
            <Input totalLength={individualResult.length} 
            type="text" 
            maxLength={280}
            onChange={(e) => handleInputChange(e, index)} 
            value={individualResult}/>
          <InputLength>{individualResult.length}/280</InputLength>
          
        </InputContainer>
        </>
      ))}
  </ThreadContainer>
  </>
  );
};

export default ThreadComponent;
