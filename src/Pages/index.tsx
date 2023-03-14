import { Navigate, Outlet, useLocation, useNavigate } from "react-router";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Hiw from "./HowItWorks/Hiw";
import SignIn from "./Signin/Signin";
import SignUp from "./Signup/SignUp";
import Postie from "./Postie/Postie";
import Contactus from "./ContactUs/Contactus";

const PublicPaths =[
    "/",
    "/how-it-works",
    "/about-us",
    "/post-an-item",
    "/contact-us"
]

const Index = ()=>{
    return (
        <>
        <Routes>
            <Route path="/"element={<Home/>} />
            <Route path="/how-it-works"element={<Hiw/>} />
            <Route path="/about-us"element={<About/>} />
            <Route path="/post-an-item"element={<Postie/>} />
            <Route path="/contact-us"element={<Contactus/>} />
            <Route path="/sign-in"element={<SignIn/>} />
            <Route path="/sign-up"element={<SignUp/>} />
        </Routes>
        </>
    )
}
export default Index;

