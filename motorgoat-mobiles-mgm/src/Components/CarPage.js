import React, { useState } from "react";
import CarList from "./CarList";
import Search from "./Search";
import NewCarForm from "./NewCarForm";

function CarPage() {
    const [ car, setCar ] = useState('')
    const [ id, type, year, make, model, image, price ] = car
    return (
        <main>
            <NewCarForm />
            <Search />
            <CarList setCar={setCar} car={car} />
        </main>
    )
}

export default CarPage;