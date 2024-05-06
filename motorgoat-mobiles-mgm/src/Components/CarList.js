import React from "react";
import CarCard from "./CarCard";

function CarList({ listings }) {

    return (
        <ul className="car-list" >
            {listings?.map((car) => (
                    <CarCard key={car.id}
                    type={car.type} 
                    year={car.year} 
                    make={car.make} 
                    model={car.model}
                    image={car.image}
                    price={car.price}
                />
            ))}
        </ul>
    )
}

export default CarList;

