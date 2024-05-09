import React from "react";
import "../App.css";

function CarList({ listings }) {
  return (
    <div className="listings-container">
      {listings && Array.isArray(listings) && listings.map((listing, index) => (
        <ListingItem key={index} listing={listing} />
      ))}
    </div>
  )
}

function ListingItem({ listing }) {
  const [available, setAvailable] = React.useState(() => {
    const savedState = localStorage.getItem(`listing${listing.id}`)
    return savedState ? JSON.parse(savedState) : true
  })

  const handleAvailableClick = () => {
    const newAvailableState = !available
    setAvailable(newAvailableState)
    localStorage.setItem(`listing${listing.id}`, JSON.stringify(newAvailableState))
  }

  return (
    <div className="listing">
      <div>
        {available ? (
          <button style={{ color: 'black', backgroundColor: 'green' }} onClick={handleAvailableClick} className="primary">Available!</button>
        ) : (
          <button onClick={handleAvailableClick} className="secondary">Sold!</button>
        )}
      </div>
      <img src={listing.image} alt={listing.type} />
      <p>{listing.year} {listing.make}</p>
      <p>{listing.model}</p>
      <p>Price: {listing.price}</p>
    </div>
  );
}

export default CarList;














