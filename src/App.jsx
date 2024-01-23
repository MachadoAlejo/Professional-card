import React from "react";
import "./App.css"
import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"
import Footer from "./components/Footer.jsx"


export default function App () {
    return (
        <div className="app--container">
           <div className="app--container--two">
            <Header />
             <Main />
            <Footer />
           </div>
        
        </div>
    )
}