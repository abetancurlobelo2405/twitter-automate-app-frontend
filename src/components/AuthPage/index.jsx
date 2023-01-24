import React, { useEffect } from 'react'
import {useSearchParams, useNavigate} from "react-router-dom"
import Cookies from 'js-cookie'

const AuthPage = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()
  const oauthToken = searchParams.get("oauth_token");
  const oauthVerifier = searchParams.get("oauth_verifier");
  
    useEffect(() => {
       fetch(`http://twitterautomation.up.railway.app/twitter/login/callback/`, {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({oauthToken, oauthVerifier})
      }).then(async response => {
        const data = await response.json()
        Cookies.set("userID", data)
        navigate('/home')
      })
      }, []);

  return (
    <>
    <p>Loading...</p>
    <h2> Authenticating... </h2>
    </>
    )
}

export default AuthPage