import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { Link, useLocation } from "react-router-dom";
import "../App.css";

function Navbar() {
    const location = useLocation();
    

    return (
        <nav class="navbar">
            <Container>
               <Row class="navrow">
                 <Col xs={6} md={4}>
                    {location.pathname !== "/" && <Link to="/">Home</Link>}
                 </Col>

                 <Col xs={6} md={4}>    
                    <Link to="/car">Cars
                      <Image src="https://t3.ftcdn.net/jpg/00/79/71/36/360_F_79713649_GqVb9ZF7lj2JU2SO7BC2f1aZuvJ2GeiM.jpg" thumbnail /> 
                    </Link>
                 </Col>   

                 <Col xs={6} md={4}>
                    <Link to="/truck">Trucks 
                      <Image src="https://media.istockphoto.com/id/485787194/photo/generic-silver-pickup-truck.jpg?s=612x612&w=0&k=20&c=sQ3b0fE6FJXCHag-gF4naMzTj8WAlkl4MVafd4EyNyQ=" thumbnail />
                    </Link>
                 </Col>  

                 <Col xs={6} md={4}> 
                    <Link to="/suv">SUVs
                      <Image src="https://media.istockphoto.com/id/949409516/photo/3d-illustration-of-generic-suv-car-on-white.jpg?s=612x612&w=0&k=20&c=HDZCkGDi4wM8UI-hFwoHoHGQun75lx9OuYf0-4t-OI8=" thumbnail />
                    </Link>
                 </Col>   

                 <Col xs={6} md={4}> 
                    <Link to="/new-car">Sell Your Car Here!!
                      <Image src="https://cashncarryparts.com/wp-content/uploads/2023/10/cash-for-cars.png" thumbnail />
                    </Link>
                 </Col>        
               </Row>
           </Container>    
        </nav>
    )
}

export default Navbar;