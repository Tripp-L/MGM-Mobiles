import React from "react";
import CarList from "./CarList";
import NewCarForm from "./NewCarForm";

function CarPage({ listings }) {

    return (
        <div className="car-page">
            <CarList listings={listings} />
            <NewCarForm />
        </div>
    )
}

export default CarPage;