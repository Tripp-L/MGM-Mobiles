import React from "react";
import { useLocation } from 'react-router-dom';
import Search from "./Search";

function Header({ setSearchTerm }) {
    const location = useLocation();

    return (
        <header className="header">
            <h1 className="heading" id="heading">MotorGOAT-Mobiles</h1>
            <img className="head-pic" src="https://img.freepik.com/premium-photo/funny-goats-driving-with-cargenerative-ai_847296-3673.jpg" alt="Logo" />
            {location.pathname !== '/new-car' && <Search setSearchTerm={setSearchTerm} />}
        </header>
    )
}

export default Header;
