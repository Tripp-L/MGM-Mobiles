import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import CarPage from "./CarPage";
import CarList from "./CarList";
import NewCarForm from "./NewCarForm";
import Navbar from "./Navbar";

function App() {
    const [listings, setListings] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch("http://localhost:3001/listings")
       .then((res) => res.json())
       .then((data) => setListings(data))
    }, [])

    return (
        <Router>
            <div className="app">
                <Header setSearchTerm={setSearchTerm} />
                <Navbar />
                <Routes>
                    <Route path="/" element={<CarPage listings={listings} searchTerm={searchTerm} setListings={setListings} setSearchTerm={setSearchTerm} />} />
                    <Route path="/car" element={<CarList listings={listings.filter(car => car.type === 'Car')} searchTerm={searchTerm} />} />
                    <Route path="/truck" element={<CarList listings={listings.filter(car => car.type === 'Truck')} searchTerm={searchTerm} />} />
                    <Route path="/suv" element={<CarList listings={listings.filter(car => car.type === 'SUV')} searchTerm={searchTerm} />} />
                    <Route path="/new-car" element={<NewCarForm setListings={setListings} />} />
                </Routes>
            </div>
        </Router>
    );
}


export default App;
