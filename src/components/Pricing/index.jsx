import React from 'react'
import { Icon, PlanDetails, PlanName, PlanPrice, PricingCard, PricingContainer } from './PricingElements'
import {BsTwitter} from "react-icons/bs"
import {AiOutlineFieldTime} from "react-icons/ai"
import { PaypalSubscriptionButton } from '../PaypalComponent'

const Pricing = () => {
  const plans = {
    basic:"P-7DV94734XE9255937MPHS3YY",
    intermedium:"P-5ET37217V4858380PMPHTVQY"
  }

  return (
    <>
    <h1>PRICING PLANS</h1>
    <PricingContainer>
        <PricingCard>
          <PlanName>FREE PLAN</PlanName>
          <PlanDetails><Icon><BsTwitter/></Icon>Generate 2 tweets/day with AI</PlanDetails>
          <PlanDetails><Icon><AiOutlineFieldTime/></Icon>Schedule 1 tweet/day</PlanDetails>
        </PricingCard>

        <PricingCard>
          <PlanName>BASIC PLAN</PlanName>
          <PlanDetails><Icon><BsTwitter/></Icon>Generate 8 tweets/day with AI</PlanDetails>
          <PlanDetails><Icon><AiOutlineFieldTime/></Icon>Schedule 4 tweets/day</PlanDetails>
          <PlanPrice>$5</PlanPrice>
          <PaypalSubscriptionButton plan={plans.basic} />
        </PricingCard>

        <PricingCard>
          <PlanName>INTERMEDIUM PLAN</PlanName>
          <PlanDetails><Icon><BsTwitter/></Icon>Generate 15 tweets/day with AI</PlanDetails>
          <PlanDetails><Icon><AiOutlineFieldTime/></Icon>Schedule 8 tweets/day</PlanDetails>
          <PlanPrice>$12</PlanPrice>
          <PaypalSubscriptionButton plan={plans.intermedium} />
        </PricingCard>
    </PricingContainer>
    </>
  )
}

export default Pricing