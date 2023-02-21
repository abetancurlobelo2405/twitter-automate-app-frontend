import Script from 'react-load-script'
import React from 'react'
import Cookies from 'js-cookie'

const PaddleLoader = () => {
  const token = Cookies.get("userID")
  return <Script url="https://cdn.paddle.com/paddle/paddle.js" 
  onLoad={() => {
    Paddle.Environment.set("sandbox");
    Paddle.Setup({
        vendor: 10371,
        eventCallback: async function(data) {
          if (data.event === "Checkout.Complete") {
            console.log(data.eventData);
          }
          else if (data.event === "Checkout.Close") {
            console.log(data.eventData); // Data specifics on the event
          }
    }})
  }} />
}

export default PaddleLoader