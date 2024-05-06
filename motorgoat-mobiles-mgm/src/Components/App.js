import React, { useState, useEffect } from "react";
// import Header from "./Header";
// import CarPage from "./CarPage";

function App({ cars }) {
    const [listings, setListings] = useState([])
    const [ id, type, year, make, model, image, price ] = listings
    const [ available, setAvailable ] = useState(true)
  
    function handleAvailableClick() {
      setAvailable((currentAvailableState) => !currentAvailableState)
    }

    useEffect(() => {
        fetch("http://localhost:3001/listings")
       .then((res) => res.json())
       .then((data) => setListings(data.listings))
    }, [])

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
     </li>
     );
}


export default App;
