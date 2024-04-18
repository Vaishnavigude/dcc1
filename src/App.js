import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Sidenav from './components/Sidenav'
import Project from './components/project'
import Profile from './components/Profile'
import Reports from './components/Reports'
import Siteengineer from './components/Siteengineer'
import Stactive from './components/Stactive'
import Scomplete from './components/Scomplete'


function App(){
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route exact path="/Signup" element={<Signup/>}></Route>
        <Route exact path="/Login" element={<Login/>}></Route>
        <Route exact path="/Sidenav" element={<Sidenav/>}></Route>
        <Route exact path="/project" element={<Project/>}></Route>
        <Route exact path="/Profile" element={<Profile/>}></Route>
        <Route exact path="/Reports" element={<Reports/>}></Route>
        <Route exact path="/Siteengineer" element={<Siteengineer/>}></Route>
        <Route exact path="/Stactive" element={<Stactive/>}></Route>
        <Route exact path= "/Scomplete" element={<Scomplete/>}></Route>
      </Routes>
    </Router>
  )
 }

 export default App