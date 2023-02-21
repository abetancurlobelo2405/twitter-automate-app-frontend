import styled from "styled-components";

export const BackgroundImage = styled.img`
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
`

export const Main = styled.div`
  position: absolute;
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`

export const LeftPanel = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const OptionsPanel = styled.div`
    pointer-events: ${props => props.result === "" && props.loader === false ? "auto" : "none"};
    background-color: ${props => props.result === "" && props.loader === false ? "none" : "#dddddd90"};
    margin: 8px auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #dddddd;
    box-shadow: 2px 2px 2px #dddddd;
`

export const RightPanel = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    margin: 10px;
`

export const LoadedData = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
   
`

export const ChangeFormatBtn = styled.button`
display: flex;
justify-content: center;
align-items: center;
    border: none;
    outline: none;
    background-color: #04a1f6;
    color:#9dddff;
    border-radius: 3px;
    margin-top: 5px;
    margin-bottom: 4px;
    font-weight: 700;

    &:focus{
        border: none;
        outline: none;
    }
`

export const TweetButton = styled.button`
    outline: none;
    border: none;
    border-radius: 3px;
    background-color: #04a1f6;
    margin-top: 5px;
    font-weight: 700;
    color: #f5f5f5c5;
    
    &:hover{
        outline: none;
        border: none;
        background-color: #9dddff;
    }

    &:focus{
        outline: none;
        border: none;
    }
`

export const ScheduleBtn = styled.button`
    display: flex;
    outline: none;
    border: none;
    font-weight: 700;
    background-color: #04a1f6;
    color: #f5f5f5c5;
    font-size: 15px;
    border-radius: 4px 4px 0px 0px;
    box-shadow: 2px 2px 3px #dddddd;

    &:focus{
        outline: none;
        border: none;
    }
`



export const TextBarContainer = styled.form`
    position: relative;
    background-color: #ffffff;
    border-radius: 4px 4px 4px 4px;
    color: #c5c5c5;
    display: flex;
    box-shadow: 0px 2px 3px #868686;
`

export const InputText = styled.input`
    position: relative;
    outline: none;
    border: none;
    z-index: 999;
    background-color: #ffffff;
    width: 600px;
    font-size: 20px;
    height: 50px;
    
`

export const Submit = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65px;
    border-radius: 0px 4px 4px 0px;
    border: none;
    outline: none;
    color:#c5c5c5;

    &:focus{
        border: none;
        outline: none;
    }
`

export const RobotIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    color:#c5c5c5;
    border-radius: 4px 0px 0px 4px;
`
