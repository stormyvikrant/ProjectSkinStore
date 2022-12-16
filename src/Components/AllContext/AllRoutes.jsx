import React from 'react'
import {Routes,Route}   from "react-router-dom"
import Home from "./Pages/Home";
import Login from "./Pages/AuthPages/Login";
import SignUp from "./Pages/AuthPages/Signup";



const AllRoutes = () => {
  
return <div>
<Routes>
 <Route path="/" element={<Home/> } />
 <Route path="/login" element={<Login/>} />
 <Route path="/signup" element={<SignUp/>} />

</Routes>
 


</div>
}

export default AllRoutes