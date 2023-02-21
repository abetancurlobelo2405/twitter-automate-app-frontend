import React, { useEffect, useState } from 'react'
import { FreePlanTitle, IntermediumPlanTitle, PlanData, PremiumPlanTitle, Price, PriceSymbol, PricingContainer, PricingFreeCard, PricingIntermediumCard, PricingPremiumCard } from './PricingElements'
import {AiOutlineFieldTime} from "react-icons/ai"
import { PaypalSubscriptionButton } from '../PaypalComponent'
import PaddleLoader from '../PaddleLoader'
import {MdSchedule} from "react-icons/md"
import {BsTwitter} from "react-icons/bs"
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";

const PLANS = {
  intermediumPlan:"43799",
  premiumPlan:"43877"
}

const Pricing = () => {
  const token = Cookies.get("userID")
  const [userData, setUserData] = useState({})
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    setLoader(true)
    fetch(`${import.meta.env.VITE_URL}/user-data/`, {
      method:"POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({token})
    }).then(async(response) => await response.json()).then(data => {
      setUserData(data)
    })
    setLoader(false)
  }, [])

  const handlePause = async(status) => {
    setLoader(true)
    await fetch(`${import.meta.env.VITE_URL}/subscription/pause`, {
      method: "POST",
      headers: {"content-type":"application/json"},
      body: JSON.stringify({pause: status, token})
    }).then(async(response) => {
      const data = await response.json()
      if(data.error){
        alert(data.error.message)
      }
      if(data.success){
        window.location.reload()
      }
    })
    setLoader(false)
  }

  const handleUpgradeDowngrade = async(planId) => {
    setLoader(true)
    await fetch(`${import.meta.env.VITE_URL}/subscription/upgrade`, {
      method: "POST",
      headers: {"content-type":"application/json"},
      body: JSON.stringify({planId, token})
    }).then(async(response) => {
      const data = await response.json()
      if(data.error){
        alert(data.error.message)
      }
      if(data.success){
        window.location.reload()
      }
    })
    setLoader(false)
  }

  const handleLoginRedirect = () => {
    navigate("/sign-in")
  }

  return (
    <>
    <PaddleLoader/>
    {loader ? <>Loading...</> : undefined}
    {userData?.plan?.subscriptionDetails?.currentStatus === "activated"
      &&
      <>
       <button disabled={loader ? true : false} onClick={() => handlePause(true)}>PAUSE SUBSCRIPTION</button>
      </>}
      
      {userData?.plan?.subscriptionDetails?.currentStatus === "paused" 
      && <button disabled={loader ? true : false} onClick={() => handlePause(false)}>ACTIVATE SUBSCRIPTION</button>}

    <h1>PRICING PLANS</h1>
    <h2>¡Get inspired and improve your tweets with Artificial Inteligence!</h2>
    <PricingContainer onClick={JSON.stringify(userData) === "{}" ? () => handleLoginRedirect() : undefined}>
      <PricingFreeCard>
          <FreePlanTitle>FREE PLAN</FreePlanTitle>
          <PlanData>
            <p>
                Perfect for those just starting out on twitter or for those 
                on a tight budget.
            </p>
            <p><BsTwitter/> Generate 2 tweets per day.</p>
            <p><MdSchedule/> Schedule 1 tweet each 3 days.</p>
          </PlanData>
      </PricingFreeCard>

      <PricingIntermediumCard onClick={() => {
        userData?.plan?.isSubscribed === false
        ? Paddle.Checkout.open({
          product:43799,
          customData:{currentUserToken: token}})
        : undefined
      }}>

      <IntermediumPlanTitle>INTERMEDIUM PLAN</IntermediumPlanTitle>
        <Price>
          <PriceSymbol>
            $
          </PriceSymbol>
          5
        </Price>
        <PlanData>
            <p>
              Designed for who are looking to 
              increase their social media presence.
              Improving your tweets and allowing you to reach a wider audience.
            </p>
            <hr/>
            <p><BsTwitter/> Generate 10 tweets per day.</p>
            <p><MdSchedule/> Schedule 3 tweets per day.</p>
          </PlanData>
      </PricingIntermediumCard>
  
      <PricingPremiumCard onClick={() => {
        userData?.plan?.isSubscribed === false
        ? Paddle.Checkout.open({
          product:43877,
          customData:{currentUserToken: token}})
        : undefined
      }}>
        <PremiumPlanTitle>PREMIUM PLAN</PremiumPlanTitle>
        <Price>
          <PriceSymbol>
            $
          </PriceSymbol>
          13
        </Price>
        <PlanData>
            <p>
              For those looking to maximize their social media impact and improve their tweets, 
              our AI-powered tweet creation service is the perfect solution. 
              It ensures that your message reaches the right audience at the right time, 
              maximizing impact.
            </p>
            <hr/>
            <p><BsTwitter/> Generate 18 tweets per day.</p>
            <p><MdSchedule/> Schedule 8 tweets per day.</p>
          </PlanData>
      </PricingPremiumCard>
    </PricingContainer>
    {userData?.plan?.isSubscribed === true ? userData?.plan?.subscriptionDetails?.subscriptionPlanID === PLANS.intermediumPlan 
        ? undefined 
        : <button disabled={loader ? true : false} onClick={() => handleUpgradeDowngrade(PLANS.intermediumPlan)}>CHANGE TO INTERMEDIUM PLAN</button> 
    : undefined}

    {userData?.plan?.isSubscribed === true ? userData?.plan?.subscriptionDetails?.subscriptionPlanID === PLANS.premiumPlan 
        ? undefined 
        : <button disabled={loader ? true : false} onClick={() => handleUpgradeDowngrade(PLANS.premiumPlan)}>CHANGE TO PREMIUM PLAN</button> 
    : undefined}
    </>
  )
}

export default Pricing