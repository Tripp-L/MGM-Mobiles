import React, { useState } from "react";

function CarCard({ type, year, make, model, image, price }) {
  const [ available, setAvailable ] = useState(true)

  function handleAvailableClick() {
    setAvailable((currentAvailableState) => !currentAvailableState)
  }

  return (

    <li className="card" data-testid={"car-item"} >
      <img src={image} alt={type} />
      <h4>{type} </h4>
      <p>Type: {type}</p>
      <p>Year: {year}</p>
      <p>Make: {make}</p>
      <p>Model: {model}</p>
      <p>Price: {price}</p>
      {available ? (
        <button onClick={handleAvailableClick} className="primary">Available!</button>
      ) : (
        <button onClick={handleAvailableClick} className="secondary">Sold!</button>
      )}
    </li>
  );
}

export default CarCard;
