import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Program from "./Component/Program/Program";
import Title from "./Component/Title/Title";
import About from "./Component/About/About";
import Campus from "./Component/Campus/Campus";
import Testimonials from "./Component/Testimonials/Testimonials";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import VideoPlayer from "./Component/Videoplayer/VideoPlayer";
import ChatBot from "./Component/Chabot/ChatBot";
import Btech from "./Component/Program/Pages/Btech";
import Mtech from "./Component/Program/Pages/Mtech";
import Phd from "./Component/Program/Pages/Phd";
import TestimonialProfile from "./Component/Testimonials/TestimonialProfile";
// import AddProgram from "./Component/Admin/AdminPrgram";
import Admin from "./Component/Admin/Admin";

import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import ProtectedRoute from "./routes/ProtectedRoute";
import ApplyForm from "./Component/Program/Pages/ApplyForm";

function App() {

  const [playState, setPlayState] = useState(false);
  const token = localStorage.getItem("token");
  const isLoggedIn = token && token !== "undefined" && token !== "null";
  return (
    <BrowserRouter>
     {!isLoggedIn ? (

/* 🔐 NOT LOGGED IN */
<Routes>

<Route path="/" element={<Login />} />
<Route path="/register" element={<Register />} />

</Routes>

) : (
      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />

              <Hero />

              <div className="container">

                <Title subTitle="Our Program" title="What we offer" />
                <Program />

                <About setPlayState={setPlayState} />

                <Title subTitle="Gallery" title="Campus Photos" />
                <Campus />

                <Title subTitle="TESTIMONIALS" title="What Student Says" />
                <Testimonials />

                <Title subTitle="Contact US" title="Get In Touch" />
                <Contact />

                <Footer />

              </div>

              <VideoPlayer
                playState={playState}
                setPlayState={setPlayState}
              />

              <ChatBot />
            </>
          }
        />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Register Page */}
        <Route path="/register" element={<Register />} />

        <Route path="/btech" element={<Btech />} />
        <Route path="/phd" element={<Phd />} />
        <Route path="/mtech" element={<Mtech />} />
        <Route path="/testimonial/:id" element={<TestimonialProfile />} />
        <Route path="/"element={<ProtectedRoute><Hero/></ProtectedRoute>}/>
        <Route path="/apply" element={<ApplyForm />} />
        {/* <Route path="/admin" element={<AddProgram />} /> */}
        <Route path="/program" element={<ProtectedRoute><Program /></ProtectedRoute>}/>
        <Route path="/admin" element={<Admin />} />
        

      </Routes>
)};
    </BrowserRouter>
  );
}

export default App;