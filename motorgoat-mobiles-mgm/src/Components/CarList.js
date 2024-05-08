import React, { useState } from "react";
import "../App.css";

function CarList({ listings }) {
  const [ available, setAvailable ] = useState(true)

  function handleAvailableClick() {
    setAvailable((currentAvailableState) => !currentAvailableState)
  }

  return (
    <div className="listings-container">
      {listings && Array.isArray(listings) && listings.map((listing, index) => (
        <div className="listing" key={index}>
          <div>
        {available ? (
          <button style={{ color: 'black', backroundColor: 'green' }} onClick={handleAvailableClick} className="primary">Available!</button>
      ) : (
          <button  onClick={handleAvailableClick} className="secondary">Sold!</button> 
      )}
          </div>
          <img src={listing.image} alt={listing.type} />
          <p>{listing.year} {listing.make}</p>
          <p>{listing.model}</p>
          <p>Price: {listing.price}</p>
        </div>
      ))}
    </div>
  );
}

export default CarList;












