import { Link, Outlet } from "react-router-dom"
import {useContext, Fragment} from "react";
import {AuthContext} from "../providers/AuthProvider.jsx"

const Navbar = () => {

 const authContext = useContext(AuthContext)
  
  const {auth,logout}  = authContext

  const AuthLinks  = (
  <Fragment> 
    <Link to="/post/new" className="hidden bg-grey md:flex gap-2 link rounded-full">
        <i className="fi fi-rr-file-edit"></i>
          <p>Post</p>
      </Link>
      <Link onClick={logout} className="btn-dark py-2 " to="/">
          Log Out
    </Link>
  </Fragment>

  )

  const GuestLinks = (
    <Fragment>
          <Link className="btn-dark py-2 " to="/login">
          Sign In
        </Link> 
        <Link className="btn-dark py-2 " to="/register">
          Sign Up
        </Link>:
    </Fragment>
  )

  return (
    <>
    <nav className="navbar">
      <Link to="/" className="flex-none w-10">
        <img src="" className="w-full" alt="Logo"  />
      </Link>
      <div className="flex items-center gap-3 md:gap-6 ml-auto">
      
        {auth ? AuthLinks : GuestLinks}
      

        </div>
      
    </nav>
    <Outlet />
    </>
  )
}

export default Navbar
