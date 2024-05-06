import React from "react";
import { Link, useLocation } from 'react-router-dom';
import Search from "./Search";

function Header({ setSearchTerm }) {
    const location = useLocation();

    return (
        <header>
            <h1>MotorGOAT-Mobiles</h1>
            <img src="https://img.freepik.com/premium-photo/funny-goats-driving-with-cargenerative-ai_847296-3673.jpg" alt="Logo" />
            {location.pathname !== '/new-car' && <Search setSearchTerm={setSearchTerm} />}
            <nav>
                <ul>
                    {location.pathname !== "/" && <li><Link to="/">Home</Link></li>}
                    <li><Link to="/car">Cars</Link></li>
                    <li><Link to="/truck">Trucks</Link></li>
                    <li><Link to="/suv">SUVs</Link></li>
                    <li><Link to="/new-car">Sell Your Car Here!!</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
