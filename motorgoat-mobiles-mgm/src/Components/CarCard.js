import React, { useState } from "react";

function CarCard({ listings }) {
  const [ year, make, model, image, price ] = listings
  const [ available, setAvailable ] = useState(true)

  function handleAvailableClick() {
    setAvailable((currentAvailableState) => !currentAvailableState)
  }

  return (
    <ul className="card">
      <img src={image} alt={make} />
      <h1>Find Your New Ride! </h1>
      <p>Year: {year}</p>
      <p>Make: {make}</p>
      <p>Model: {model}</p>
      <p>Price: {price}</p>
      {available ? (
        <button onClick={handleAvailableClick} className="primary">Available</button>
      ) : (
        <button onClick={handleAvailableClick} className="secondary">Sold</button>
      )}
    </ul>
  );
}

export default CarCard;
