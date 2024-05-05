import React from "react";
import CarList from "./CarList";
import NewCarForm from "./NewCarForm";
import CarCard from "./CarCard";

function CarPage({ listings }) {

    return (
        <main>
            <CarCard key={listings.id} listings={listings} />
            <CarList listings={listings} />
            <NewCarForm />
        </main>
    )
}

export default CarPage;