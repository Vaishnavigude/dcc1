import React from "react";
import ReactDom from 'react-dom/client';
import App from './App.js';
import Sidenav from './Sidenav.jsx'
import './style.css';
import  Project from './project.js';
import Profile from "./Profile.js";
import Reports from "./Reports.js";
import Siteengineer from "./Siteengineer.js"
import Stactive from "./Stactive.js";
import Scomplete from "./Scomplete.js";
import { BrowserRouter as Router, Routes,Route, BrowserRouter } from 'react-router-dom';


ReactDom.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
    <BrowserRouter>
    <App/>
    <Sidenav/>
    <Project/>
    <Profile/>
    <Reports/>
    <Siteengineer/>
    <Stactive/>
    <Scomplete/>
    </BrowserRouter>
    </React.StrictMode>
);