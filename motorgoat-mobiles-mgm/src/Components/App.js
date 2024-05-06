import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import CarPage from "./CarPage";
import CarList from "./CarList"; 
import NewCarForm from "./NewCarForm";
import Navbar from "./Navbar"; 

function App() {
    const [listings, setListings] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("http://localhost:3001/listings")
            .then((res) => res.json())
            .then((data) => setListings(data))
    }, []);

  
    const filteredListings = listings.filter(car =>
        car.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.year.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.price.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Router>
            <div className="app">
                <Header setSearchTerm={setSearchTerm} /> 
                <Navbar /> 
                <Routes>
                    <Route path="/car" element={<CarList listings={filteredListings.filter(car => car.type === 'Car')} />} />
                    <Route path="/truck" element={<CarList listings={filteredListings.filter(car => car.type === 'Truck')} />} />
                    <Route path="/suv" element={<CarList listings={filteredListings.filter(car => car.type === 'SUV')} />} />
                    <Route path="/new-car" element={<NewCarForm setListings={setListings} />} />
                    <Route path="/" element={<CarPage listings={filteredListings} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;








