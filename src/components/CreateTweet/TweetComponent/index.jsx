import Cookies from "js-cookie";
import React from "react";
import { TweetButton } from "./TweetComponentElements";

const TweetComponent = (props) => {
  const {result, headerText, date, dateValues} = props
  const token = Cookies.get("userID")

  const postTweet = async() => {
    const response = await fetch("http://localhost:8080/twitter/login/post-tweet", {
        method: "POST",
        headers: {"Content-Type":"application/json", "authorization": token},
        body: JSON.stringify({result, headerText: headerText ? headerText : undefined, date, dateValues})
      })
      if(response.status >= 400){
        Cookies.remove("userID")
        alert("An error ocurred, please log in and try again.")
        window.location.href = "/"
      }
      if(response.status === 201){
        alert("Tweet created!!")
      }
  }

  return (
  <>
  {result}
    <TweetButton onClick={postTweet}>Tweet it!</TweetButton>
  </>);
};

export default TweetComponent;
