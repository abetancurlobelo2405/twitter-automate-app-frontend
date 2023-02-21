import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`

export const Modal = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
`

export const CloseButton = styled.button`
    position: absolute;
    top: 0;
    left: 1;
    right: 0;
    margin: 10px;
    background-color: blue;
`

export const PreviewButton = styled.button`
    display: flex;
    align-items: center;
    background-color: #535bf2;
    color: #ffffff;
    font-weight: 650;
    border-radius:3px;
    outline: none;
    border: none;

    &:hover{
        outline: none;
        border: none;
        background-color: #646cff;
    }

    &:focus{
        outline: none;
        border: none;
    }
`

export const TweetContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    text-align: left;
    align-items: start;
    margin: 10px;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 1px 1px 2px #dddddd;
    border: 1px solid #c5c5c5;
`

export const TweetSection = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: scroll;
    width: 100%;
    margin: 5px;
`

export const TweetIconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 210px;
`

export const TweetDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin-left: 10px;
`

export const TweetText = styled.span`
    margin: 5px;
`

export const Icons = styled.img`
    width: 20px;
    height: 20px;
`

export const ProfilePicture = styled.img`
    width: 70px;
    height: 70px;
    background-color: #c9c9c9;
    border-radius: 50%;
`