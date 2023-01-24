import Cookies from 'js-cookie'
import React from 'react'
import ResultAI from './ResultAI'
import {Navigate} from "react-router-dom"
import {Main} from "./IndexComponentElement"

const CreateTweet = () => {
  const token = Cookies.get("userID")
  if(!token){
    return <Navigate to="/" replace/>
  }

  return (
    <>
    <Main>
      <div>NAVBARSSSSSSSSSSSSSSSSSSSS</div>
    <ResultAI/>
    </Main>
    </>
  )
}

export default CreateTweet