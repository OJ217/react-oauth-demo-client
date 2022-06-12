import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar";
import { authContext } from "./context/AuthContext";

export default function App() {
  const user = useContext(authContext);

  return (
    <BrowserRouter>
      <>
        <Navbar/>
        <main className="w-full flex mt-12 justify-center">
          <Routes>
            <Route element={<Home />} path="/" exact />
            {!user && <Route element={<SignIn />} path="/sign-in" exact />}
          </Routes>
        </main>
      </>
    </BrowserRouter>
  )
}
