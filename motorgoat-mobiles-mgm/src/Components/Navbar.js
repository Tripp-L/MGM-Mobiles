import React from "react";
import Container from 'react-bootstrap/Container';
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar">
            <Container>
                <div className="navrow">
                    <Link to="/" className="nav-link">
                        {location.pathname !== "/" ? (
                            <div className="nav-item">
                                <img className="nav-image" src="https://snapseo.ca/wp-content/uploads/Car-dealership.jpg" alt="Home" />
                                <span className="nav-text">Home</span>
                            </div>
                        ) : null}
                    </Link>

                    <Link to="/cars" className="nav-link">
                        <div className="nav-item">
                            <img className="nav-image" src="https://t3.ftcdn.net/jpg/00/79/71/36/360_F_79713649_GqVb9ZF7lj2JU2SO7BC2f1aZuvJ2GeiM.jpg" alt="Cars" />
                            <span className="nav-text">Cars</span>
                        </div>
                    </Link>

                    <Link to="/trucks" className="nav-link">
                        <div className="nav-item">
                            <img className="nav-image" src="https://media.istockphoto.com/id/485787194/photo/generic-silver-pickup-truck.jpg?s=612x612&w=0&k=20&c=sQ3b0fE6FJXCHag-gF4naMzTj8WAlkl4MVafd4EyNyQ=" alt="Trucks" />
                            <span className="nav-text">Trucks</span>
                        </div>
                    </Link>

                    <Link to="/suv" className="nav-link">
                        <div className="nav-item">
                            <img className="nav-image" src="https://media.istockphoto.com/id/949409516/photo/3d-illustration-of-generic-suv-car-on-white.jpg?s=612x612&w=0&k=20&c=HDZCkGDi4wM8UI-hFwoHoHGQun75lx9OuYf0-4t-OI8=" alt="SUVs" />
                            <span className="nav-text">SUVs</span>
                        </div>
                    </Link>

                    <Link to="/buy-here" className="nav-link">
                        <div className="nav-item">
                            <img className="nav-image" src="https://i0.wp.com/bestsellingcarsblog.com/wp-content/uploads/2021/12/man-handing-woman-car-keys-700x460-main.jpg?resize=600%2C394" alt="Buy Here" />
                            <span className="nav-text">Buy Here</span>
                        </div>
                    </Link>

                    <Link to="/new-car" className="nav-link">
                        <div className="nav-item">
                            <img className="nav-image" id="sell" src="https://cashncarryparts.com/wp-content/uploads/2023/10/cash-for-cars.png" alt="Sell Your Car Here!!" />
                            <span className="nav-text">Sell Here</span>
                        </div>
                    </Link>

                    <Link to="/get-approved" className="nav-link">
                        <div className="nav-item">
                            <img className="nav-image" src="https://creditcenterofsuffolk.com/wp-content/uploads/2015/09/get-approved.jpg" alt="Get Approved" />
                            <span className="nav-text">Finance</span>
                        </div>
                    </Link>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar;
