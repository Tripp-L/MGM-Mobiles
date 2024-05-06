import React, { useState, useEffect } from "react";
import Header from "./Header";
import CarPage from "./CarPage";

function App() {
    const [listings, setListings] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/listings")
       .then((res) => res.json())
       .then((data) => setListings(data.listings))
    }, [])

    return (
        <div className="app">
            <Header />
            <CarPage listings={listings} />
        </div>
    );
}

export default App;
