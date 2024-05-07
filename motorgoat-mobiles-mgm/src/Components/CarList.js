import React from "react";
import CarCard from "./CarCard";

function CarList({ listings }) {
    return (
        <div className="car-list">
            {listings ? (
                listings.map(car => (
                    <CarCard key={car.id} {...car} />
                ))
            ) : (
                <p>No listings available</p>
            )}
        </div>
    );
}

export default CarList;












