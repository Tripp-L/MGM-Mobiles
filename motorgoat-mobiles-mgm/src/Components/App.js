import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import CarList from "./CarList";
import NewCarForm from "./NewCarForm";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BuyHere from "./BuyHere";
import GetApprovedForm from "./GetApprovedForm";

function App() {
    const [listings, setListings] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [newListings, setNewListings] = useState([]);
    const [searched, setSearched] = useState(false);
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        const storedListings = JSON.parse(localStorage.getItem("listings"));
        const storedNewListings = JSON.parse(localStorage.getItem("newListings"));

        if (storedListings && storedListings.length > 0) {
            setListings(storedListings);
        } else {
            fetch("http://localhost:3001/listings")
                .then((res) => res.json())
                .then((data) => setListings(data))
                .catch((error) => console.error("Error fetching data:", error));
        }

        if (storedNewListings && storedNewListings.length > 0) {
            setNewListings(storedNewListings);
        } else {
            setNewListings([]);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("listings", JSON.stringify(listings));
    }, [listings]);

    useEffect(() => {
        localStorage.setItem("newListings", JSON.stringify(newListings));
    }, [newListings]);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm.toLowerCase());
        setSearched(true);
    };

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
        setListings((prevListings) => prevListings.filter(listing => listing.id !== item.id));
        setNewListings((prevNewListings) => prevNewListings.filter(listing => listing.id !== item.id));
    };

    const removeFromCart = (id) => {
        const itemToRemove = cart.find(item => item.id === id);
        if (itemToRemove) {
            setCart((prevCart) => prevCart.filter(item => item.id !== id));
            if (itemToRemove.id < 1000) {
                setListings((prevListings) => [...prevListings, itemToRemove]);
            } else {
                setNewListings((prevNewListings) => [...prevNewListings, itemToRemove]);
            }
        }
    };

    const allListings = [...listings, ...newListings];

    return (
        <Router>
            <div className="app">
                <Header setSearchTerm={handleSearch} />
                <Navbar />
                <Routes>
                    <Route path="/cars" element={<CarList listings={searched ? allListings.filter(car =>
                        car.type.toLowerCase() === 'car' &&
                        (car.year.includes(searchTerm) ||
                            car.make.toLowerCase().includes(searchTerm) ||
                            car.model.toLowerCase().includes(searchTerm) ||
                            car.price.toString().includes(searchTerm))
                    ) : listings.filter(car => car.type.toLowerCase() === 'car')} addToCart={addToCart} />} />
                    <Route path="/trucks" element={<CarList listings={searched ? allListings.filter(truck =>
                        truck.type.toLowerCase() === 'truck' &&
                        (truck.year.includes(searchTerm) ||
                            truck.make.toLowerCase().includes(searchTerm) ||
                            truck.model.toLowerCase().includes(searchTerm) ||
                            truck.price.toString().includes(searchTerm))
                    ) : listings.filter(truck => truck.type.toLowerCase() === 'truck')} addToCart={addToCart} />} />
                    <Route path="/suv" element={<CarList listings={searched ? allListings.filter(suv =>
                        suv.type.toLowerCase() === 'suv' &&
                        (suv.year.includes(searchTerm) ||
                            suv.make.toLowerCase().includes(searchTerm) ||
                            suv.model.toLowerCase().includes(searchTerm) ||
                            suv.price.toString().includes(searchTerm))
                    ) : listings.filter(suv => suv.type.toLowerCase() === 'suv')} addToCart={addToCart} />} />
                    <Route path="/new-car" element={<NewCarForm setListings={setNewListings} />} />
                    <Route path="/" element={<CarList listings={searched && searchTerm !== '' ? allListings.filter(listing =>
                    (listing.year.includes(searchTerm) ||
                        listing.make.toLowerCase().includes(searchTerm) ||
                        listing.model.toLowerCase().includes(searchTerm) ||
                        listing.price.toString().includes(searchTerm))
                    ) : []} addToCart={addToCart} />} />
                    <Route path="/buy-here" element={<BuyHere cart={cart} removeFromCart={removeFromCart} />} />
                    <Route path="/get-approved" element={<GetApprovedForm />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
