import {Routes, Route} from  "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePost from "./components/HomePost"
import UserAuthForm from "./pages/UserAuthForm"
import './App.css'



function AppRouter() {
  return (
    <div>
    <Routes>
    
     <Route path="/" element={<Navbar/>}>
      < Route path="signIn" element ={<UserAuthForm type="sign-in"/>} />
      < Route path="signUp" element ={<UserAuthForm type="sign-up"/>} />
      
      </Route>
      
    </Routes>
    <HomePost/>
    <Footer/>
    </div>
  )



}

export default AppRouter
