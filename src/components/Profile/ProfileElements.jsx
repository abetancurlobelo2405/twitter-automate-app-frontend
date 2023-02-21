import styled from "styled-components"

export const ScheduleCard = styled.div`
    background-color: #ececec;
    overflow-y: scroll;
    width: 100%;
    border-radius: 6px;
    height: 300px;
`

export const ScheduleDate = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
`

export const TweetContainer = styled.div`
    padding: 5px;
    border-radius: 6px;
    margin: 10px;
    border: 1px solid #dddddd;
    box-shadow: 2px 2px 3px #dddddd;
`

export const SingleTweet = styled.div`
    display: flex;
    margin: 2px;
    align-items: center;
    justify-content: center;
    white-space: pre-line;
    background-color: #ffffff;
    margin: 10px;
    padding: 5px;
`

export const Tweet = styled.div`
    display: flex;
    margin: 2px;
    justify-content: flex-start;
    align-items: flex-start;
    white-space: pre-line;
    background-color: #ffffff;
    margin: 10px;
    padding: 5px;
`

export const ScheduleContainer = styled.main`
    display: flex;
    width: 50vw;
    flex-direction: column;
    padding: 10px;
`