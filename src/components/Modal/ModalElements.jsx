import styled, { keyframes } from "styled-components"

export const CloseButton = styled.button`
    outline: none;
    border: none;
    position: absolute;
    right: 0;
    top: 0;
    margin: 5px;
    background-color: #dddddd;

    &:hover{
        outline: none;
        border: none;
    }
`

export const Overlay = styled.div`
    position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9999999;
`

export const Title = styled.p`
    position: absolute;
    top: 0;
    left: 0;
    margin: 10px;
    background-color: #12afec;
    padding: 5px;
    color: #ffffff;
    border-radius: 3px;
`

export const Modal = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: start;
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 10px;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 100px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
`