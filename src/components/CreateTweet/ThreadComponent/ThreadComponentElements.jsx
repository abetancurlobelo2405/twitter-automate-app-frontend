import styled from "styled-components"

export const ThreadContainer = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 2px 2px 3px #dddddd;
  border: 1px solid #c9c9c9;
  border-radius: 4px;
  overflow-y: hidden;
`
export const InputContainer = styled.div`
  position: relative;
  width: 93%;
  margin: 5px;
  border: 1px solid #dddddd;
  background-color: #ffffff;
  box-shadow: 2px 2px 3px #dddddd;
  padding: 10px;
`

export const VerticalLine = styled.div`
  height: 200px;
  z-index: -100;
  position: absolute;
  right: 0;
  left: 0;
  width: 1px;
  margin: auto;
  background-color: #8a8a8a;
`

export const Input = styled.textarea`
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  resize: none;
  font-size: 16px;
  height: 120px;
  width: 96%;
  border-radius: 3px;
  padding-left:10px;
  padding: 10px;
  text-align: left;
 
  &:focus{
    background-color: #f5fdff;
    outline: none;
    box-shadow: 1px 1px 2px #dddddd;
    border: 1px solid #c9c9c9;
  }
`;

export const InputLength = styled.span`
  background-color: ${props => props.inputLength > 280 ? "1px solid #ff2424" : "#00acee"};
  color: #ebebeb;
  padding: 5px;
  border-radius: 4px;
  pointer-events: none;
  font-size: 12px;
  color: ${props => props.inputLength > 280 ? "#ff2424" : "none"};
  border: ${props => props.inputLength > 280 ? "1px solid #ff2424" : "#00000"};
`

export const TrashContainer = styled.div`
  &:hover{
    color: #ff6262;
    cursor: pointer;
  }

  &:focus{
    color: #ff6262;
    cursor: pointer;
  }
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