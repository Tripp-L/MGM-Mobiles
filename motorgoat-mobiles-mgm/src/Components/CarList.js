import React from "react";
import Search from "./Search";

function CarList({ listings, searchTerm, handleAvailable }) {
    const filterListings = listings.filter((car) =>
        listings.make.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <ul className="car-list">
            {filterListings.map((listing) => (
              <Search key={listing.id} listings={listings} />
            ))}
        </ul>
    )
}

export default CarList;

