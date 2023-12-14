import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import About from "./views/About";
import Navbar from "./component/navBar";
import NotFound from "./views/NotFound"

const Layout = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Layout;