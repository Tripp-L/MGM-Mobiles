import React from "react";
import CarCard from "./CarCard";

function CarList({ car }) {
    return (
        <div className="car-list">
            {car.map((car) => (
                <CarCard key={car.id} car={car} />
            ))}
        </div>
    )
}

export default CarList;

