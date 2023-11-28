import {Routes, Route} from  "react-router-dom"
import Navbar from "./components/navbar.component"
import UserAuthForm from "./pages/userAuthForm.page"
import './App.css'



function AppRouter() {
  return (
    <Routes>
     <Route path="/" element={<Navbar/>}>
      < Route path="IniciarSesion" element ={<UserAuthForm type="Iniciar-Sesion"/>} />
      < Route path="Registrarme" element ={<UserAuthForm type="Registrarme"/>} />
      </Route>
    </Routes>
  )



}

export default AppRouter
