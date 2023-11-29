import {Routes, Route} from  "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home.jsx"
import UserAuthForm from "./pages/UserAuthForm.jsx"
import PostDetails from "./pages/PostDetails.jsx"

import './App.css'



function AppRouter() {
  return (
    <div>
        <Navbar/>
        <Routes>
            
            < Route path="/" element ={<Home/>}/>
            < Route path="/signin" element ={<UserAuthForm type="sign-in"/>} />
            < Route path="/signup" element ={<UserAuthForm type="sign-up"/>} />
            < Route path="/posts/post/:id" element ={<PostDetails/>} />
        </Routes>
        <Footer/>
    </div>
  )



}

export default AppRouter
