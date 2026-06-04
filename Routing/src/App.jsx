import { useState } from "react";
import { BrowserRouter , Routes , Route , Link , useNavigate } from "react-router-dom";

import './App.css'

function App() {

  return <div>
    {/* This thing will appear on all the routes */}
    {/* so can act like a top bar */}

    {/* Naive way of redirecting */}
    {/* So we will be using Link and Navigate */}
    {/* <a href="/">Allen</a> 
    |
    <a href="/class-11">Class 11</a>
    |
    <a href="/class-12">Class 12</a>  */}

    {/* Wrapping the whole application inside this BrowserRouter */}
    <BrowserRouter>
    {/* NOTE: We cannot use Link outside the BrowserRouter we can us them only inside BroswerRouter */}
      <Link to="/" >Allen</Link>
      |
      <Link to="/class-11" >Class 11</Link>
      |
      <Link to="/class-12" >Class 12</Link>
      <Routes>
        <Route path="/class-11" element={<Class11Program />} />
        <Route path="/class-12" element={<Class12Program />} />
        <Route path="/" element={<Landing />} />

        {/* If ny random route comes we will render this */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      Footer | Contact Us
    </BrowserRouter>
  </div>
}

function ErrorPage() {
  return <div>
    Sorry Page not found
  </div>
}

function Class11Program() {
  return <div>
    NEET Programs for Class 11th
  </div>
}

function Class12Program() {
  const navigate = useNavigate();

  function redirectUser() {
    // Another method of navigating to other pages without rpeloading the whole contents of the page
    navigate("/");
  }

  return <div>
    NEET Programs for Class 12th
    <button onClick={redirectUser}>Go back to landing Page</button>
  </div>
}

function Landing() {
  return <div>
    Welcome to Allen
  </div>
}

export default App