import React from "react";
import CarCard from "./CarCard";

function CarList({ listings, searchTerm }) {

    const filteredListings = (listings || []).filter(car =>
        car.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.year.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.price.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="car-list">
            {filteredListings.length > 0 ? (
                filteredListings.map(car => (
                    <CarCard key={car.id} {...car} />
                ))
            ) : (
                <p>No listings match your search</p>
            )}
        </div>
    );
}

export default CarList;







