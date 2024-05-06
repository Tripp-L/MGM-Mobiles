import React from "react";
import CarCard from "./CarCard";

function CarList({ listings, searchTerm }) {
    const filteredListings = searchTerm ? listings.filter(car =>
        car.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.year.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.price.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];

    return (
        <ul className="car-list">
            {filteredListings.map(car => (
                <CarCard key={car.id} {...car} />
            ))}
        </ul>
    );
}

export default CarList;



