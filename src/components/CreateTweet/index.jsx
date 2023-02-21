import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import {
  BackgroundImage, 
  RobotIcon, 
  Submit, 
  TextBarContainer, 
  InputText, 
  Main, 
  LoadedData, 
  LeftPanel, 
  RightPanel, 
  ScheduleBtn,
  TweetButton,
  ChangeFormatBtn,
  OptionsPanel
} from "./IndexComponentElement.jsx"
import {FaRobot} from "react-icons/fa"
import {RiSendPlaneFill} from "react-icons/ri"
import ThreadComponent from './ThreadComponent/index.jsx'
import TweetComponent from './TweetComponent/index.jsx'
import DatesScheduler from './DatesScheduler/index.jsx'
import {BsFillCalendarCheckFill} from "react-icons/bs"
import {MdSwapVert} from "react-icons/md"
import { ModalWindow } from '../Modal/index.jsx'

const CreateTweet = () => {
  const token = Cookies.get("userID")
  const [text, setText] = useState("")
  const [result, setResult] = useState("")
  const [loader, setLoader] = useState(false)
  const [isScheduledSubmit, setIsScheduledSubmit] = useState(undefined) // true: submit with schedule / false: submit without schedule
  const [isThread, setIsThread] = useState(true)
  const [isSchedule, setIsSchedule] = useState(false)
  const [options, setOptions] = useState({
    emojis: true,
    hashtags: true
  })
  const navigate = useNavigate()
  const [dateValues, setDateValues] = useState({
    days: null,
    hours: null,
    minutes: null
  });
  const [error, setError] = useState(false)
  const [modalError, setModalError] = useState(false)

  useEffect(() => {
    if(dateValues.days > 6 || dateValues.hours > 23 || dateValues.minutes > 59){
      setError(true)
    }else{
      setError(false)
    }
  }, [dateValues])

  const handleOptions = (e) => {
    setOptions({
      ...options,
      [e.target.name]: e.target.checked
    });
  }

  const generateTweet = async(e) => {
    e.preventDefault()
    setLoader(true)
    const response = await fetch(`${import.meta.env.VITE_URL}/twitter/generate/`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({text:text, token:token, options:options})
    })
    
    if(response.status === 405){
      setModalError(true)
      setResult("")
      setLoader(false)
      return
    }

    if(response.status === 400){
      alert(data.error)
    }
    if(response.status === 401){
      navigate("/login")
    }

    const data = await response.json()
    setResult(data)
    setLoader(false)
    
  }

  const textHandler = (e) => {
    setText(e.target.value)
  }
  
  const tweetHandler = () => {
    setIsThread(!isThread)
  }

  const scheduleHandler = () => {
    setIsSchedule(!isSchedule)
  }

  const datesHandler = (event) => {
    setDateValues({
      ...dateValues,
      [event.target.name]: event.target.value
    });
  }

  const isScheduleSubmitHandler = (value) => {
    // This variable only evaluates if the tweet needs to be sent.
    // if the tweet sent, in each tweet component single/thread it will
    // evaluate if its a thread or a single tweet.
    setIsScheduledSubmit(value)
  }

  const modalHandler = () => {
    setModalError(false)
  }

  return (
    <>
    {modalError && <ModalWindow modalError={modalError} title={"Insufficient tries."} modalHandler={modalHandler}>
      Insufficient tries, update to premium plan to get unlimited generations.
    </ModalWindow>}
    <BackgroundImage src="/create-tweet-background-min.svg"></BackgroundImage>

    
    <Main>
      <TextBarContainer>
        <RobotIcon><FaRobot style={{width:"30px", height:"30px"}}/></RobotIcon>
        <InputText minLength={3} onChange={textHandler}/>
        <Submit disabled={result.length > 1 ? true : false} onClick={generateTweet}><RiSendPlaneFill style={{width:"30px", height:"30px"}}/></Submit>
      </TextBarContainer>
        
        <OptionsPanel result={result} loader={loader}>
          <span>Generate tweets with:</span>
          <label>
            <span>Emojis</span>
            <input
              type="checkbox"
              name="emojis"
              checked={options.emojis}
              onChange={handleOptions}
            />
          </label>

          <label>
            <span>Hashtags</span>
            <input
              type="checkbox"
              name="hashtags"
              checked={options.hashtags}
              onChange={handleOptions}
            />
          </label>
        </OptionsPanel>
    
        {loader 
        ? <img src="loader.svg"></img>
          : result !== "" 
          ? <>
            <LoadedData>
              <LeftPanel>
                <>
                  <ChangeFormatBtn onClick={tweetHandler}>CHANGE FORMAT <MdSwapVert style={{ fontSize:"20px" }}/></ChangeFormatBtn>
                  <ScheduleBtn onClick={scheduleHandler}>SCHEDULE THIS TWEET<BsFillCalendarCheckFill style={{ marginLeft: "7px" }}/></ScheduleBtn>
                  <DatesScheduler dateValues={dateValues} isScheduleSubmitHandler={isScheduleSubmitHandler} error={error} datesHandler={datesHandler} isSchedule={isSchedule}/>
                  {!isSchedule ? <TweetButton onClick={() => isScheduleSubmitHandler(false)}>TWEET NOW!</TweetButton> : undefined}
                </>
              </LeftPanel>
              <RightPanel>
                {isThread 
                  ? <>
                  <h2>THREAD OF TWEETS</h2>
                    <ThreadComponent result={result} submitTweet={isScheduledSubmit} isThread={isThread} isSchedule={isSchedule} error={error} dateValues={dateValues}/> 
                  </>
                  : <>
                  <h2>SINGLE TWEET</h2>
                  <TweetComponent result={result} submitTweet={isScheduledSubmit} isThread={isThread} isSchedule={isSchedule} dateValues={dateValues}/>
                  </>}
              </RightPanel>
            </LoadedData>
            </> 
        : <>
        <div style={{width:"100%", display:"flex", justifyContent:"center", backgroundColor:"blue"}}>
          <img style={{position:"absolute", left:"1", right:"1", width:"300px"}} src="/no-tweets-template.svg"></img>
        </div>
        </>}
      </Main>
      
      </>
  )
}

export default CreateTweet