import React, { useState } from "react";

function CarCard({ car }) {
  const [ id, year, make, model, image, price ] = car
  const [ available, setAvailable ] = useState(true)

  function handleAvailableClick() {
    setAvailable((currentAvailableState) => !currentAvailableState)
  }

  return (
    <li className="card">
      <img src={image} alt={year} />
      <h1>{year} {make} {model} </h1>
      <p>Price: {price}</p>
      {available ? (
        <button onClick={handleAvailableClick} className="primary">Available</button>
      ) : (
        <button onClick={handleAvailableClick} className="secondary">Sold</button>
      )}
    </li>
  );
}

export default CarCard;
