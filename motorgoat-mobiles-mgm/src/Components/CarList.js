import React from "react";
import CarCard from "./CarCard";

function CarList({ listings }) {
    return (
        <div className="car-list">
            {listings.map(car => (
                <CarCard key={car.id} {...car} />
            ))}
        </div>
    );
}

export default CarList;




