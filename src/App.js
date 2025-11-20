import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Features from "./components/Features";
import Find from "./components/Bat";
import Bat from "./components/Bat";
import Contacts from "./components/Contacts";
import './App.css';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Adminlayout from "./components/Admin layout";
import Enquiries from "./components/Enquiries";
import Registeration from "./components/Registeration";
import Addblogs from "./components/Addblogs";
import Viewblogs from "./components/Viewblogs";
import Blogs from "./components/Blogs";
import Blogdetail from "./components/Blogdetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<Adminlayout/>}>
          <Route path="enquiries" element={<Enquiries/>}/>
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="Registeration" element={<Registeration/>} />
          <Route path="addblogs" element={<Addblogs/>} />
          <Route path="viewblogs" element={<Viewblogs/>} />

          </Route>
      
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="features" element={<Features/>} />
          <Route path="find" element={<Find />} />
          <Route path="Bat" element={<Bat />} />
          <Route path="contacts" element={<Contacts />} />
             
             <Route path="blogs" element={<Blogs/>}/>
              <Route path="login" element={<Login />} />
              <Route path="blogdetail/:id" element={<Blogdetail/>} />
                
        </Route>
      </Routes>
    </BrowserRouter>
  );
}