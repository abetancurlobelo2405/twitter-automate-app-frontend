import styled from "styled-components";

export const Container = styled.div`
    width: 80vw;
    height: 80vh;
`

export const Presentation = styled.div`
    display: flex;
    flex-direction: column;
    height: 50%;
    align-items: center;
    justify-content: center;
`

export const Box = styled.div`
    position: relative;
    display: flex;
    flex-direction:column;
    background-color: #ffffff;
    width: 430px;
    align-items: center;
    text-align: left;
    margin-top: 150px;
    border-radius: 4px;
    border: 1px solid #dddddd;
    box-shadow: 1px 1px 3px #464646;
`

export const Highliter = styled.strong`
    color: #00acee;
    border-bottom: 1px solid #00acee;
`

export const TwitterLogo = styled.div`
    position: absolute;
    color: #00acee;
    left: 0;
`

export const Title = styled.h1`
    font-size: 30px;
    color: #00acee;
`

export const CreateTweet = styled.div`
    margin: auto;
    background-color: #00acee;
    color: #ffffff;
    font-weight: 700;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 1px 1px 3px #dddddd;
    width: fit-content;
`

export const Text = styled.p`
    padding: 10px;
`

export const ReferenceInput = styled.input`
    border: 1px solid #6b6b6b;
    outline: none;
    height: 30px;
    font-size: 25px;
    border-radius: 3px;
    text-align: center;
    pointer-events: none;
    width: 500px;
    transform: rotate(-6deg);
`

export const ImageBackground = styled.img`
    position: absolute;
    z-index: -999;
    width: 100%;
    bottom: 0;
    right: 0;
    left: 0;
`