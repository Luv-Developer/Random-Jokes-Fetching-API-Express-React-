import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./Components/Login.jsx"
import Register from "./Components/Register.jsx"
import Homepage from "./Components/Homepage"
import Jokes from "./Components/Jokes.jsx"
import Profile from "./Components/Profile.jsx"
const app = () =>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Homepage/>}></Route>
      <Route path = "/login" element = {<Login/>}></Route>
      <Route path = "/register" element = {<Register/>}></Route>
      <Route path = "/jokes" element = {<Jokes/>}></Route>
      <Route path = "/profile" element = {<Profile/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default app 