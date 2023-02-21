import styled from "styled-components"


export const PricingContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px;
`

export const FreePlanTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #5e5e5e;
    font-weight: 700;
    font-size: 20px;
    margin: 10px;
    height: 30px;
    border-radius: 4px 4px 0px 0px;
`

export const IntermediumPlanTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: flex-start;
    background-color: #04a1f6;
    color: #ffffff;
    font-weight: 700;
    height: 30px;
    font-size: 20px;
    margin: 10px;
    border-radius: 4px 4px 0px 0px;
`

export const PremiumPlanTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: flex-start;
    background-color: #ffc401;
    color: #ffffff;
    font-weight: 700;
    height: 30px;
    font-size: 20px;
    margin: 10px;
    border-radius: 4px 4px 0px 0px;
`

export const PlanData = styled.div`
    position: relative;
    padding-left: 10px;
    padding-right: 10px;
`

export const Price = styled.div`
    position: relative;
    margin: 10px auto;
    padding: 10px;
    font-weight: 700;
    font-size: 50px;
`

export const PriceSymbol = styled.span`
    position: absolute;
    font-size: 13px;
    top: 0;
    left: 0;
`

export const PricingFreeCard = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    margin: 10px; 
    width: 300px;
    border: 1px solid #919191;
    border-radius: 6px;
    cursor: pointer;
`

export const PricingIntermediumCard = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px; 
    width: 300px;
    color: #ffffff;
    background: #04a1f6;
background: linear-gradient(180deg, rgba(4,161,246,1) 8%, rgba(0,116,179,1) 87%);
    border-radius: 6px;
    cursor: pointer;
`

export const PricingPremiumCard = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px; 
    width: 300px;
    color: #ffffff;
    background: rgb(255,196,1);
    background: linear-gradient(180deg, rgba(255,196,1,1) 8%, rgba(212,162,0,1) 87%);
    border-radius: 6px;
    cursor: pointer;
`