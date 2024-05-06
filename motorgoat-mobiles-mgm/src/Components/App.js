import React, { useState, useEffect } from "react";
import Header from "./Header";
import CarPage from "./CarPage";

function App() {
    const [listings, setListings] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch("http://localhost:3001/listings")
       .then((res) => res.json())
       .then((data) => setListings(data))
    }, [])

    return (
        <div className="app">
            <Header setSearchTerm={setSearchTerm} />
            <CarPage listings={listings} searchTerm={searchTerm} setListings={setListings} setSearchTerm={setSearchTerm} /> 
        </div>
    );
}


export default App;
