import React, { useState } from "react";

function CarCard({ car }) {
  const [ id, type, year, make, model, image, price ] = car
  const [ available, setAvailable ] = useState(true)

  function handleAvailableClick() {
    setAvailable((currentAvailableState) => !currentAvailableState)
  }

  return (

    <li className="card" data-testid={`car-item-${id}`} >
      <img src={image} alt={`${make} ${model}`} />
      <h4>{`${year} ${make} ${model}`} </h4>
      <p>Type: {type}</p>

      <p>Price: {price}</p>
      {available ? (
        <button onClick={handleAvailableClick} className="primary">Available!</button>
      ) : (
        <button onClick={handleAvailableClick} className="secondary">Sold!</button>
      )}
    </ul>
  );
}

export default CarCard;
