import React, { useState, useEffect } from "react";
import Header from "./Header";
import CarPage from "./CarPage";

function App() {
    const [listings, addCar] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch("http://localhost:3000/listings")
       .then((res) => res.json())
       .then((data) => addCar(data.listings))
    }, [])

    return (
        <div className="app">
            <Header setSearchTerm={setSearchTerm} />
            <CarPage listings={listings} searchTerm={searchTerm} addCar={addCar} setSearchTerm={setSearchTerm} />
        </div>
    );
}

export default App;
