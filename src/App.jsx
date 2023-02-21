import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css'
import SignIn from './components/SignIn'
import Home from './components/Home'
import AuthPage from './components/AuthPage'
import CreateTweet from './components/CreateTweet'
import Pricing from "./components/Pricing";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Test from "./components/Test";

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Header>this is navbar</Header>
        <Routes>
          <Route path="/login" element={<SignIn/>}></Route>
          <Route path="/test" element={<Test/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/pricing" element={<Pricing/>}></Route>
          <Route path="/auth-page" element={<AuthPage/>}></Route>
          <Route path="/" element={<Home/>} />
          <Route path="/create-tweet" element={<CreateTweet/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
