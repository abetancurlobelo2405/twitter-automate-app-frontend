import styled from "styled-components";

export const TweetButton = styled.button`
    position: absolute;
    top: 1;
    bottom: 0;
    left: 1;
    right: 0;
    margin: 50px;
    width: 200px;
    z-index: 20;
`

export const Tweet = styled.textarea`
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
    border-radius: 4px;
    resize: none;
    color: ${props => props.inputLength > 280 ? "#ff2424" : "none"};
    border: ${props => props.inputLength > 280 ? "1px solid #ff2424" : "#00000"};
    box-shadow: 2px 2px 3px #dddddd;

    &:focus{
        border: ${props => props.inputLength > 280 ? "1px solid #ff2424" : "#00000"};
        outline: ${props => props.inputLength > 280 ? "1px solid #ff2424" : "#00000"};;
    }
`