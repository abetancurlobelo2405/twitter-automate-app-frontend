import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css'
import SignIn from './components/SignIn'
import Home from './components/Home'
import AuthPage from './components/AuthPage'
import CreateTweet from './components/CreateTweet'
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}></Route>
        <Route path="/pricing" element={<Pricing/>}></Route>
        <Route path="/auth-page" element={<AuthPage/>}></Route>
        <Route path="/home" element={<Home/>} />
        <Route path="/create-tweet" element={<CreateTweet/>} />
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
