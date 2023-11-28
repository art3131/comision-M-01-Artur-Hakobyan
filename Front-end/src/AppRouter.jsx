import {Routes, Route} from  "react-router-dom"
import Navbar from "./components/navbar.component"
import UserAuthForm from "./pages/userAuthForm.page"
import './App.css'



function AppRouter() {
  return (
    <Routes>
     <Route path="/" element={<Navbar/>}>
      < Route path="signIn" element ={<UserAuthForm type="sign-in"/>} />
      < Route path="signUp" element ={<UserAuthForm type="sign-up"/>} />
      </Route>
    </Routes>
  )



}

export default AppRouter
