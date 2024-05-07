import React, { useState } from "react";
import Container from 'react-bootstrap/Container';

function CarCard({ type, year, make, model, image, price }) {
  const [ available, setAvailable ] = useState(true)

  function handleAvailableClick() {
    setAvailable((currentAvailableState) => !currentAvailableState)
  }

  return (
    <Container className="card" data-testid={"car-item"} >
        <p>
        {available ? (
          <button onClick={handleAvailableClick} className="primary">Available!</button>
      ) : (
          <button onClick={handleAvailableClick} className="secondary">Sold!</button> 
      )}
        </p>
        <img src={image} alt={type} />
        <p>{year} {make}</p>
        <p>{model}</p>
        <p>Price: {price}</p>
      </Container>
  );
}

export default CarCard;
