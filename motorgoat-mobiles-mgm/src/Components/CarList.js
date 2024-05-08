import React from "react";

function CarList({ listings }) {
  return (
    <div className="listings-container">
      {listings && Array.isArray(listings) && listings.map((listing, index) => (
        <div className="listing" key={index}>
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












