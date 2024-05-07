import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import CarPage from "./CarPage";
import NewCarForm from "./NewCarForm";
import Navbar from "./Navbar"; 
import CarCard from "./CarCard";

function App() {
    const [listings, setListings] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch("http://localhost:3001/listings")
            .then((res) => res.json())
            .then((data) => setListings(data)) 
            .catch((error) => console.error("Error fetching data:", error))
    }, [searchTerm])

    const filteredListings = listings.filter(car =>
        car.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.year.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.price.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <Router>
            <div className="app">
                <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> 
                <Navbar /> 
                <Routes>
                    <Route path="/cars" element={<CarCard listings={filteredListings.filter(car => car.make === 'Car')} />} />
                    <Route path="/trucks" element={<CarCard listings={filteredListings.filter(car => car.make === 'Truck')} />} />
                    <Route path="/suv" element={<CarCard listings={filteredListings.filter(car => car.make === 'SUV')} />} />
                    <Route path="/new-car" element={<NewCarForm setListings={setListings} />} />
                    <Route path="/" element={<CarPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;











