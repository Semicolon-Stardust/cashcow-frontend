import React, {useEffect, useContext} from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import FinLit from '../FinLit/FinLit'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Dashboard from '../Dashboard/Dashboard'
import { UserContext } from '../../context/UserContext'
import axios from 'axios';
import LoggedInNavbar from '../Navbar/LoggedInNavbar'

function Router() {

  const {user, setUser} = useContext(UserContext);

  
  return (
    <div>
        {
            user != null ? <LoggedInNavbar /> : <Navbar />
        }
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/financialLiteracy/:pageID" element={<FinLit />}/>
            { user != null ? <Route path="/dashboard" element={<Dashboard />} /> : null }
        </Routes>

        <Footer />


    </div>
  )
}

export default Router