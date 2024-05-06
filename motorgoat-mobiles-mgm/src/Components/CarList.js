
import React, { useState, useEffect  } from "react";
import CarCard from "./CarCard";

<<<<<<< HEAD
function CarList({ car }) {
    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/listings")
       .then((res) => res.json())
       .then((data) => setCars(data.cars))
    }, [])

=======
function CarList({ listings }) {
>>>>>>> refs/remotes/origin/Zack

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

