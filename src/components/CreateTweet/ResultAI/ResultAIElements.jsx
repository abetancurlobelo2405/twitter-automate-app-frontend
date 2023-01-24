import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
    height: 100%;
    justify-content: center;
`

export const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    flex: 1;
    box-shadow: 2px 2px 3px #dddddd;
    border: 1px solid #dddddd;
    border-radius: 8px;
`

export const TweetButton = styled.button`
    position: absolute;
`

export const Tweet = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 95%;
`

export const Panel = styled.div`
    display: flex;
    padding: 20px;
    flex: 1;
    box-shadow: 2px 2px 3px #dddddd;
    border: 1px solid #dddddd;
    border-radius: 8px;
    margin: 10px;
    flex-direction: column;
`

export const AITextArea = styled.textarea`
    outline: ${props => props.inputMaxLength >= 280 ? `1px solid #ff5252;` : `1px solid #dddddd`};
    color: ${props => props.inputMaxLength >= 280 ? `#ff5252;` : `#2b2b2b`};
    resize: none;
    min-width:99%;
    height: 80px;
    font-size: 15px;
    box-shadow: 2px 2px 3px #dddddd;
    border: 1px solid #c9c9c9;
    border-radius: 4px;
`

export const FormToAI = styled.form`
    width: 97%;
    margin: 10px auto;
    font-size: 15px;
    border-radius: 2px;
`

export const TweetGenerateBtn = styled.button`
    background-color: ${props => props.resultByAI === "" ? `#535bf2` : `#a9adf8`};
    pointer-events: ${props => props.resultByAI === "" ? `auto` : `none`};
    color: #dddddd;
    width: 100%;
    box-shadow: 2px 2px 3px #dddddd;
    border: 1px solid #c9c9c9;
    outline:none;

    &:hover{
        background-color: #646cff;
        outline:none;
        border:none;
    }
`

export const HeaderTextContainer = styled.div`
    position:relative;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    margin: 5px auto;
`

export const HeaderTextArea = styled.textarea`
    outline: ${props => props.inputMaxLength >= 280 ? `1px solid #ff5252;` : `none`};
    color: ${props => props.inputMaxLength >= 280 ? `#ff5252;` : `#2b2b2b`};
    resize: none;
    min-width: 100%;
    height: 80px;
    box-shadow: 2px 2px 3px #dddddd;
    border: 1px solid #c9c9c9;
    font-size: 15px;
    border-radius: 4px;
`

export const HeaderTextLength = styled.span`
    position: absolute;
    pointer-events: none;
    top: 1;
    bottom: 0;
    left: 1;
    right: 0;
    margin-top: 3px;
    margin-right: 5px;
    font-size: 10px;
`

export const TextResult = styled.div`
    display: flex;
    margin: auto;
    margin: 4px;
    flex-direction: column;
    justify-content: center;
    align-items: flex;
    background-color: #ffffff;
    height: 84%;
    width: 97%;
`

export const BottomOptionsDiv = styled.div`
    margin: 5px;
    align-items: baseline;
    width: 100%;
    display: flex;
`

export const ChangeButton = styled.button`
    flex: 1;
    margin: 3px;
    background-color: #00acee;
    width: 100%;
    font-weight: 650;
    color: #ffffff;
    outline: none;
    border: none;
    border-radius:3px;

    &:focus{
        outline: none;
        border: none;
    }

    &:hover{
        background-color: #39bef3;
        outline:none;
        border:none;
    }
`

export const DateValuesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    font-size: 30px;
`

export const ScheduleLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px;
`

export const Schedule = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0px auto;
`

export const ScheduleInput = styled.input`
    border: none;
    outline: none;
    border: 1px solid #39bef3;
    border-radius: 4px;
    font-size: 20px;
    outline: #39bef3;
`