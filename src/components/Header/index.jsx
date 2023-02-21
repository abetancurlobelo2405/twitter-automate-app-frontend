import React, { useCallback, useState } from 'react'
import { useEffect } from 'react'
import { LogoutButton, Navbar, SignInContainer, User } from './HeaderElements'
import {FaTwitter} from "react-icons/fa"
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'
import {CiShoppingTag} from "react-icons/ci"
import {IoMdCreate} from "react-icons/io"

const Header = () => {
    const [userInfo, setUserInfo] = useState("")
    const token = Cookies.get("userID")

    useEffect(() => {
        if(token){
           setUserInfo(window.localStorage.getItem("username"))
        }

        if(!token){
            window.localStorage.removeItem("username")
            setUserInfo(undefined)
        }
    }, [token])

    const handleLogout = () => {
      Cookies.remove("userID")
      window.location.href = "/"
    }
    
  return (
    <Navbar>
        <Link style={{ display:"flex", alignItems:"center" }} to="/">
          <img style={{ width:"35px" }} src="logo.svg"></img>
          <span style={{ fontWeight:"700", color:"#00acee" }}>VENEKIN</span>
          </Link> 
          
        <Link style={{ display:"flex", alignItems:"center", color:"#00acee" }} to="/pricing"> PRICING</Link> 
        {userInfo !== undefined ? <Link style={{ display:"flex", alignItems:"center", color:"#00acee" }} to="/profile"> @{userInfo}</Link> : undefined}
        {token 
        ? <>
            <Link style={{ display:"flex", alignItems:"center", color:"#00acee" }} to="/create-tweet">CREATE</Link>
            <LogoutButton style={{ color:"#00acee" }} onClick={handleLogout}>LOGOUT</LogoutButton>
          </>
        : 
        <>
          <Link style={{ color:"#00acee" }} to="/login">LOGIN </Link>
        </>}
    </Navbar>
  )
}

export default Header