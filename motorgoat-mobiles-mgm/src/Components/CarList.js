import React, { useState, useEffect } from "react";
import CarCard from "./CarCard";

function CarList() {
    const[cars, setCars]= useState([])

    useEffect(() => {
        fetch("http://localhost:3000/listings")
       .then(res => res.json())
       .then(cars => setCars(cars))
    }, [])

    return (
        <div className="car-list">
            {cars.map((car) => (
                <CarCard key={car.id} car={car} />
            ))}
        </div>
    )
}

export default CarList;

