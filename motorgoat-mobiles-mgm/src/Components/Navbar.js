import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Link, useLocation } from "react-router-dom";
import "../App.css";

function Navbar() {
    const location = useLocation();
    
    return (
        <nav className="navbar">
            <Container>
                <div className="navrow">
                    <Link to="/" className="nav-link">
                        {location.pathname !== "/" ? 'Home' : ''}
                    </Link>

                    <Link to="/car" className="nav-link">
                        <div className="nav-item">
                            <Image className="nav-image" src="https://t3.ftcdn.net/jpg/00/79/71/36/360_F_79713649_GqVb9ZF7lj2JU2SO7BC2f1aZuvJ2GeiM.jpg" thumbnail />
                            <span className="nav-text">Cars</span>
                        </div>
                    </Link>

                    <Link to="/truck" className="nav-link">
                        <div className="nav-item">
                            <Image className="nav-image" src="https://media.istockphoto.com/id/485787194/photo/generic-silver-pickup-truck.jpg?s=612x612&w=0&k=20&c=sQ3b0fE6FJXCHag-gF4naMzTj8WAlkl4MVafd4EyNyQ=" thumbnail />
                            <span className="nav-text">Trucks</span>
                        </div>
                    </Link>

                    <Link to="/suv" className="nav-link">
                        <div className="nav-item">
                            <Image className="nav-image" src="https://media.istockphoto.com/id/949409516/photo/3d-illustration-of-generic-suv-car-on-white.jpg?s=612x612&w=0&k=20&c=HDZCkGDi4wM8UI-hFwoHoHGQun75lx9OuYf0-4t-OI8=" thumbnail />
                            <span className="nav-text">SUVs</span>
                        </div>
                    </Link>

                    <Link to="/new-car" className="nav-link">
                        <div className="nav-item">
                            <Image className="nav-image" src="https://cashncarryparts.com/wp-content/uploads/2023/10/cash-for-cars.png" thumbnail />
                            <span className="nav-text">Sell Your Car Here!!</span>
                        </div>
                    </Link>
                </div>  
            </Container>     
        </nav>
    )
}

export default Navbar;



