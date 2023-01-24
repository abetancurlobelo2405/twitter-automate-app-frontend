import styled from "styled-components"

export const PricingCard = styled.div`
    margin: 10px; 
    width: 300px;
    height: 300px;
    box-shadow: 2px 2px 2px #dddddd;
    border: 1px solid #dddddd;
    border-radius: 6px;
`

export const PricingContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px;
`

export const PlanName = styled.h2`
    font-weight: 700;
`
export const Icon = styled.div`
    margin-right: 10px;
    font-size: 30px;
`

export const PlanDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    text-align: center;
    padding: 5px;
`

export const PlanPrice = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    height: 150px;
`
