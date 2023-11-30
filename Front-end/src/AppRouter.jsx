import {Routes, Route} from  "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home.jsx"
import UserAuthForm from "./pages/UserAuthForm.jsx"
import PostDetails from "./pages/PostDetails.jsx"
import CreatePost from "./pages/CreatePost.jsx"
import Profile from "./pages/Profile.jsx"

import './App.css'
import EditPost from "./pages/EditPost.jsx"



function AppRouter() {
  return (
    <div>
      
        <Navbar/>
        <Routes>
            
            < Route path="/" element ={<Home/>}/>
            < Route path="/signin" element ={<UserAuthForm type="sign-in"/>} />
            < Route path="/signup" element ={<UserAuthForm type="sign-up"/>} />
            < Route path="/write" element ={<CreatePost/>} />
            < Route path="/posts/post/:id" element ={<PostDetails/>} />
            < Route path="/edit/:id" element ={<EditPost/>} />
            < Route path="/profile/:id" element ={<Profile/>} />
        </Routes>
        <Footer/>
       
    </div>
  )



}

export default AppRouter
