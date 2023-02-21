import React, { useState, useEffect } from "react";
import {Navigate, Link} from "react-router-dom"
import Cookies from 'js-cookie';
import { Box, Container, CreateTweet, Highliter, ImageBackground, Presentation, ReferenceInput, Text, Title, TwitterLogo } from "./HomeElements";
import {FaTwitter} from "react-icons/fa"

export default function Home() {

  return (
    <>
    <Container>
      <div>
        <Title>TWEET LIKE A PROWITH ARTIFICIAL INTELLIGENCE</Title>
        <div>
          <h3><Highliter>¡2 TRIES EVERY 24 HOURS FOR FREE PLAN!</Highliter></h3>
        </div>
        <p>¡Say goodbye to writer's block and hello to <Highliter>creative tweets</Highliter>!</p>
        <p>¡Generate a tweet on <Highliter>any topic you want </Highliter>with the best Artificial Intelligence!</p>
        <Link to="/create-tweet"><CreateTweet>¡START NOW!</CreateTweet></Link>
      </div>
      <Presentation>
        <Box>
          <Text>
          <p><strong>How it works?</strong></p>
          Our AI technology <Highliter>generates tweets</Highliter> for you based on your inputted thoughts and ideas. 
          <Highliter>Simply enter your thoughts and watch as our technology creates professional and engaging tweets for you.</Highliter>
          The process is easy, fast, and saves you time and effort. It also helps to increase your online presence.
          
          <p>A simple example: This will generate a thread of tweets with <strong>10 interesting facts about sciencie and tech:</strong></p>
          </Text>
          <ReferenceInput value='"10 interesting facts about science and tech"'/>
          <TwitterLogo><FaTwitter style={{ fontSize:"60px", margin:"-30px" }}/></TwitterLogo>
        </Box>
      </Presentation>
    </Container>
    <ImageBackground src="/home-background.svg"></ImageBackground>
    </>
  );
}