import styled from "styled-components";

export const DatesContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #04a1f6;
    border-radius: 6px;
    border-radius: 0px 0px 4px 4px;
    padding: 10px;
    box-shadow: 2px 2px 3px #dddddd;
`

export const PublishedTitle = styled.span`
    font-size: 15px;
    font-weight: 700;
    color: #f5f5f5c5;
`

export const DateValue = styled.span`
    font-size: 14px;
    font-weight: 700;
    background-color: #046599;
    border-radius: 4px;
    color: #f5f5f5c5;
`

export const AcceptButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    color: #046599;
    margin-top: 5px;
    height: 30px;
    outline: none;
    border: none;

    &:focus{
        outline: none;
        border: none;
    }

    &:hover{
        background-color: #046599;
        color: #ffffff;
        outline: none;
        border: none;
    }
`

export const MaxDates = styled.span`
    font-size: 12px;
    color: #f5f5f5c5;
`

export const ScheduleData = styled.div`
    background-color: #04a1f6;
    color: #f5f5f5c5;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    font-weight: 700;
    margin-top: 60px;
    border-radius: 4px;
`

export const DateInput = styled.input`
    border: none;
    outline: none;
    height: 30px;
    color: #474747c5;
    font-size: 15px;
    border-radius: 5px;
`

export const Date = styled.div`
    display: flex;
    flex-direction: column;
`