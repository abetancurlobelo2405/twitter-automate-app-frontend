import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import ThreadComponent from '../ThreadComponent'
import TweetComponent from '../TweetComponent'
import { 
  AITextArea,
  BottomOptionsDiv,
  ChangeButton,
  Container, 
  DateValuesContainer, 
  FormToAI, 
  HeaderTextArea, 
  HeaderTextContainer, 
  HeaderTextLength, 
  Panel,
  ResultContainer,
  Schedule,
  ScheduleInput,
  ScheduleLabel,
  TextResult, 
  Tweet, 
  TweetGenerateBtn} from './ResultAIElements'
import ModalWindowTweetPreview from '../../ModalWindowTweetPreview'

const ResultAI = () => {
  const [error, setError] = useState({maxDateValues: false, isDateValues:false})
  const [isThread, setIsThread] = useState(true)
  const [result, setResult] = useState("")
  const [loader, setLoader] = useState(false)
  const [textToAI, setTextToAI] = useState("")
  const [headerText, setHeaderText] = useState("")
  const [isSchedule, setIsSchedule] = useState(false)
  const [dateValues, setDateValues] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });
 

  const handleTweetType = () => {
    setIsThread(!isThread)
  }

  const handleScheduleInterface = () => {
    setIsSchedule(!isSchedule)
  }

  const handleDateChange = (event) => {
    setDateValues({
      ...dateValues,
      [event.target.name]: event.target.value
    });
  }

  useEffect(() => {
    if(dateValues.days > 6 || dateValues.hours > 23 || dateValues.minutes > 59){
      setError(true)
    }else{
      setError(false)
    }
  }, [dateValues])

  const generateTweet = async(e) => {
      e.preventDefault()
      setLoader(true)
      const response = await fetch("https://twitterautomation.up.railway.app/twitter/generate/", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({text:textToAI})
      })
      const data = await response.json()
      setResult(data)
      setLoader(false)
  }

  const valueHandler = (e) => {
      setTextToAI(e.target.value)
  }

  const headerInputHandler = (e) => {
      setHeaderText(e.target.value)
  }

  return (
  <>
  <Container>
    <Panel>
        <button onClick={handleScheduleInterface}>SCHEDULE THIS TWEET</button>
        {isSchedule ? 
        <>
        <Schedule>
          <ScheduleLabel>
            <span>Max. 6 days</span>
            Days:
           <ScheduleInput type="number" name="days" min={0} max={6} onChange={handleDateChange} value={dateValues.days}/>
          </ScheduleLabel>
          <ScheduleLabel>
            <span>Max. 23 hours</span>
            Hours:
            <ScheduleInput type="number" name="hours" min={0} max={23} onChange={handleDateChange} value={dateValues.hours}/>
          </ScheduleLabel>
          <ScheduleLabel>
            <span>Max. 59 minutes</span>
            Minutes:
            <ScheduleInput type="number" name="minutes" min={0} max={59} onChange={handleDateChange} value={dateValues.minutes}/>
          </ScheduleLabel>
        </Schedule>
        </>
        : undefined}

        {error ? <>Correct the dates to schedule</> : 
        <>
          {dateValues.days > 0 || dateValues.hours > 0 || dateValues.minutes > 0 ? 
            <DateValuesContainer>
              <p>This tweet will be published on</p>
              <div>
                <span>{dateValues.days > 0 ? `${dateValues.days} day${dateValues.days > 1 ? "s" : ""} ` : undefined}</span>
                <span>{dateValues.hours > 0 ? `${dateValues.hours} hours ` : undefined}</span>
                <span>{dateValues.minutes > 0 
                  ? `${dateValues.hours > 0 || dateValues.days > 0 ? `and` : ""} ${dateValues.minutes} minutes ` 
                  : undefined}
                </span>
              </div>
            </DateValuesContainer>
          : undefined}
          </>}
          
    </Panel>
    
    <ResultContainer>
      <FormToAI onSubmit={generateTweet}>
          <AITextArea 
          type="text" 
          name="input" 
          resultByAI={result}
          disabled={loader ? true : false}
          onChange={(e) => valueHandler(e)}/>
        <TweetGenerateBtn resultByAI={result} type="submit">GENERATE MY TWEET</TweetGenerateBtn> 
      </FormToAI>

      <Tweet>
        <TextResult>
          {loader ? 
            <>loading...</> :
            result !== "" ?
            <>
              <HeaderTextContainer>
                  <HeaderTextArea
                  placeholder='Your header twitter header input...' 
                  maxLength={280} inputMaxLength={headerText.length} 
                  onChange={headerInputHandler} type="text" 
                  name="header"/>
                  <HeaderTextLength>{headerText.length}/280</HeaderTextLength>
              </HeaderTextContainer>
              {isThread 
              ? <ThreadComponent result={result} isSchedule={isSchedule} error={error} dateValues={dateValues} headerText={headerText}/> 
              : <TweetComponent result={result} dateValues={dateValues} headerText={headerText}/>}
              <BottomOptionsDiv>
              <ChangeButton onClick={handleTweetType}>{isThread ? <>Change To Single Tweet Format</> : <>Change To Thread Tweets Format</>}</ChangeButton>
              <ModalWindowTweetPreview/>
            </BottomOptionsDiv>
              </> 
            : <p>YOUR GENERATED TEXT HERE</p>}
            
        </TextResult>
      </Tweet>
    </ResultContainer>
  </Container>
  </>
  )
}

export default ResultAI;