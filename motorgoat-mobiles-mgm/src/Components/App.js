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
            .then((data) => setListings(data.listings)) 
            .catch((error) => console.error("Error fetching data:", error))
    }, [])

    return (
        <Router>
            <div className="app">
                <Header setSearchTerm={setSearchTerm} /> 
                <Navbar /> 
                <Routes>
                    <Route path="/cars" element={<CarList listings={listings.filter(car => car.type === 'Car')} />} />
                    <Route path="/trucks" element={<CarList listings={listings.filter(car => car.type === 'Truck')} />} />
                    <Route path="/suv" element={<CarList listings={listings.filter(car => car.type === 'SUV')} />} />
                    <Route path="/new-car" element={<NewCarForm setListings={setListings} />} />
                    <Route path="/" element={<CarPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;








