import React from "react";
import { Link, useLocation } from 'react-router-dom';
import Search from "./Search";

function Header({ setSearchTerm }) {
    const location = useLocation();

    return (
        <header>
            <h1>MotorGOAT-Mobiles</h1>
            <img src="https://img.freepik.com/premium-photo/funny-goats-driving-with-cargenerative-ai_847296-3673.jpg" alt="Logo" />
            <Search setSearchTerm={setSearchTerm}/>
        </header>
    )
}

export default Header;