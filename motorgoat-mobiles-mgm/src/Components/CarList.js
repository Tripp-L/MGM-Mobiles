import React from "react";
import "./CarList.css";

function CarList({ listings, addToCart, removeFromCart, isBuyHere }) {
  return (
    <div className="listings-container">
      {listings && Array.isArray(listings) && listings.map((listing, index) => (
        <ListingItem
          key={index}
          listing={listing}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          isBuyHere={isBuyHere}
        />
      ))}
    </div>
  );
}

function ListingItem({ listing, addToCart, removeFromCart, isBuyHere }) {
  const [available, setAvailable] = React.useState(() => {
    const savedState = localStorage.getItem(`listing${listing.id}`)
    return savedState ? JSON.parse(savedState) : true
  });

  const handleAvailableClick = () => {
    const newAvailableState = !available;
    setAvailable(newAvailableState);
    localStorage.setItem(`listing${listing.id}`, JSON.stringify(newAvailableState));
  };

  return (
    <div className="listing">
      <button
        onClick={handleAvailableClick}
        className={`status-button ${!available ? 'sold' : ''}`}
      >
        {available ? "Available!" : "Sold!"}
      </button>
      <img src={listing.image} alt={listing.type} />
      <p>{listing.year} {listing.make}</p>
      <p>{listing.model}</p>
      <p>Miles: {listing.mileage}</p>
      <p>Price: {listing.price}</p>
      <div className="button-container">
        {isBuyHere ? (
          <button onClick={() => removeFromCart(listing.id)} className="remove-button">Remove</button>
        ) : (
          <button onClick={() => addToCart(listing)} className="action-button">Purchase</button>
        )}
      </div>
    </div>
  );
}

export default CarList;
