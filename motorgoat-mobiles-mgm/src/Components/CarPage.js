import React from "react";
import CarList from "./CarList";
import NewCarForm from "./NewCarForm";

function CarPage({ listings, searchTerm, setListings }) {

    return (
        <div className="car-page">
            <CarList listings={listings} searchTerm={searchTerm}  />
            <NewCarForm setListings={setListings} />
        </div>
    )
}

export default CarPage;