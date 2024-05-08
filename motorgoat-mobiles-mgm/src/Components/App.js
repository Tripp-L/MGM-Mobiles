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
    const [newListings, setNewListings] = useState([])

    useEffect(() => {
        const storedListings = JSON.parse(localStorage.getItem("listings"))
        const storedNewListings = JSON.parse(localStorage.getItem("newListings"))

        if (storedListings && storedListings.length > 0) {
            setListings(storedListings)
        } else {
            fetch("http://localhost:3001/listings")
                .then((res) => res.json())
                .then((data) => setListings(data)) 
                .catch((error) => console.error("Error fetching data:", error))
        }

        if (storedNewListings && storedNewListings.length > 0) {
            setNewListings(storedNewListings)
        } else {
            setNewListings([])
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("listings", JSON.stringify(listings))
    }, [listings])

    useEffect(() => {
        localStorage.setItem("newListings", JSON.stringify(newListings))
    }, [newListings])

    const allListings = [...listings, ...newListings]

    const filteredListings = allListings.filter(item =>
        item.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.price.includes(searchTerm)
    )

    const filteredCarListings = listings.filter(car =>
        car.type === 'Car' &&
        (car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.price.includes(searchTerm))
    )

    const filteredTruckListings = listings.filter(truck =>
        truck.type === 'Truck' &&
        (truck.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        truck.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        truck.price.includes(searchTerm))
    )

    const filteredSUVListings = listings.filter(suv =>
        suv.type === 'SUV' &&
        (suv.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        suv.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        suv.price.includes(searchTerm))
    )

    return (
        <Router>
            <div className="app">
                <Header setSearchTerm={setSearchTerm} /> 
                <Navbar /> 
                <Routes>
                    <Route path="/cars" element={<CarList listings={filteredCarListings} />} />
                    <Route path="/trucks" element={<CarList listings={filteredTruckListings} />} />
                    <Route path="/suv" element={<CarList listings={filteredSUVListings} />} />
                    <Route path="/new-car" element={<NewCarForm setListings={setNewListings} />} />
                    <Route path="/" element={<CarPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;







