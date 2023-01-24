import React, { useState, useEffect } from "react";
import {Navigate, Link} from "react-router-dom"
import Cookies from 'js-cookie';
;
export default function Home() {
  const token = Cookies.get("userID")
  if(!token){
    return <Navigate to="/" replace/>
  }

  return (
    <div className="App-header">
      <Link to="/create-tweet">Create tweet</Link>
    </div>
  );
}