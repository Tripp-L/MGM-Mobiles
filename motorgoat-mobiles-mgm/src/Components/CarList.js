import React from "react";
import CarCard from "./CarCard";

function CarList({ car }) {

    return (
        <ul className="car-list" >
            {car?.map((car) => (
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

