import React from "react";
import Search from "./Search";

function Header({ setSearchTerm }) {

    return (
        <header>
            <h1>MotorGOAT-Mobiles</h1>
            <img src="https://img.freepik.com/premium-photo/funny-goats-driving-with-cargenerative-ai_847296-3673.jpg" alt="Logo" />
            <Search setSearchTerm={setSearchTerm}/>
        </header>
        
    )
}

export default Header;