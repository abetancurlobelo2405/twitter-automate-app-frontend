import styled from "styled-components"

export const ThreadContainer = styled.div`
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  box-shadow: 2px 2px 3px #dddddd;
  border: 1px solid #c9c9c9;
  border-radius: 4px;
`
export const InputContainer = styled.div`
  position: relative;
  margin: 5px;
`

export const Input = styled.textarea`
  border: ${props => props.totalLength >= 280 ? `2px solid #ffb1b1;` : `1px solid #dadada`};
  resize: none;
  width: 97%;
  height: 80px;
  border-radius: 3px;
  padding:10px;
  margin: 0px auto;
 

  &:focus{
    background-color: #f5fdff;
    outline: none;
    box-shadow: 1px 1px 2px #dddddd;
    border: 1px solid #c9c9c9;
  }
`;

export const InputLength = styled.span`
  position: absolute;
  left: 1;
  right: 0;
  bottom: 0;
  top: 1;
  margin: 9px;
  pointer-events: none;
  font-size: 10px;
`

export const TextResult = styled.div`
  margin: 5px;
  position: relative;
`

export const TweetButton = styled.button`
    background-color: ${props => props.buttonError ? "#b5eaff" : "#00acee"};
    display:flex;
    position: absolute;
    top: 1;
    bottom: 0;
    left: 1;
    right: 0;
    margin: 60px;
    align-items: center;
    justify-content: space-evenly;
    color: #ffffff;
    font-weight: 700;
    width: 300px;
    z-index: 20;

    &:hover{
      outline: none;
      border: none;
    }
`