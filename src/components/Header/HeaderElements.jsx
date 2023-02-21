import styled from "styled-components";

export const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #ffffff;
    color: #00acee;
    font-weight: 700;
    position:absolute; 
    top:0;
    left:0;
    height: 40px;
    width:100%;
    z-index:999;
    border-bottom: 3px solid #dddddd;
`

export const LogoutButton = styled.button`
    outline: none;
    border: none;
 
    &:hover{
    outline: none;
    border: none;
    border: 1px solid #00acee;
   
    }
`

export const User = styled.span`
    color: black;
`

export const SignInContainer = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
`
