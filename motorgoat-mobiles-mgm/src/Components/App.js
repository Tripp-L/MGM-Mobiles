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
    const [searched, setSearched] = useState(false)

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

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm)
        setSearched(true)
    }

    return (
        <Router>
            <div className="app">
                <Header setSearchTerm={handleSearch} /> 
                <Navbar /> 
                <Routes>
                    <Route path="/cars" element={searched ? <CarList listings={allListings.filter(car => car.type === 'Car' && car.make.toLowerCase().includes(searchTerm.toLowerCase()))} /> : <CarList listings={listings.filter(car => car.type === 'Car')} />} />
                    <Route path="/trucks" element={searched ? <CarList listings={allListings.filter(truck => truck.type === 'Truck' && truck.make.toLowerCase().includes(searchTerm.toLowerCase()))} /> : <CarList listings={listings.filter(truck => truck.type === 'Truck')} />} />
                    <Route path="/suv" element={searched ? <CarList listings={allListings.filter(suv => suv.type === 'SUV' && suv.make.toLowerCase().includes(searchTerm.toLowerCase()))} /> : <CarList listings={listings.filter(suv => suv.type === 'SUV')} />} />
                    <Route path="/new-car" element={<NewCarForm setListings={setNewListings} />} />
                    <Route path="/" element={searched ? <CarList listings={allListings.filter(item => item.make.toLowerCase().includes(searchTerm.toLowerCase()))} /> : <CarPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;










