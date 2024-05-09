import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import "../App.css";

function NewCarForm() {
    const [inputValues, setInputValues] = useState({})
    const [submittedListings, setSubmittedListings] = useState([])
    const [availability, setAvailability] = useState({})

    useEffect(() => {
        const storedListings = JSON.parse(localStorage.getItem("submittedListings"))
        const storedAvailability = JSON.parse(localStorage.getItem("availability"))

        if (storedListings) {
            setSubmittedListings(storedListings)
        }
        if (storedAvailability) {
            setAvailability(storedAvailability)
        }
    }, [])

    function handleInputChange(e) {
        const { name, value } = e.target
        setInputValues((prevValues) => ({ ...prevValues, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (!inputValues.type || !inputValues.year || !inputValues.make || !inputValues.model || !inputValues.image || !inputValues.price) {
            console.error("Please fill in all fields")
            return
        }

        const newListing = { ...inputValues, id: Date.now() }
        setSubmittedListings((prevListings) => [...prevListings, newListing])
        setAvailability((prevAvailability) => ({ ...prevAvailability, [newListing.id]: true }))
        localStorage.setItem("submittedListings", JSON.stringify([...submittedListings, newListing]))
        localStorage.setItem("availability", JSON.stringify({ ...availability, [newListing.id]: true }))
        setInputValues({})
    }

    const handleAvailabilityClick = (id) => {
        setAvailability((prevAvailability) => ({ ...prevAvailability, [id]: !prevAvailability[id] }))
        localStorage.setItem("availability", JSON.stringify({ ...availability, [id]: !availability[id] }))
    }

    return (
        <div>
            <div className="new-car-form">
                <form onSubmit={handleSubmit}>
                    <h2 className="sell-heading">💲 Sell Your Car Here! 💲</h2>
                    <input type="text" name="type" placeholder="Type" value={inputValues.type || ''} onChange={handleInputChange} />
                    <input type="text" name="year" placeholder="Year" value={inputValues.year || ''} onChange={handleInputChange} />
                    <input type="text" name="make" placeholder="Make" value={inputValues.make || ''} onChange={handleInputChange} />
                    <input type="text" name="model" placeholder="Model" value={inputValues.model || ''} onChange={handleInputChange} />
                    <input type="text" name="image" placeholder="Image URL" value={inputValues.image || ''} onChange={handleInputChange} />
                    <input type="text" name="price" placeholder="Price" value={inputValues.price || ''} onChange={handleInputChange} />
                    <button type="submit">Sell!</button>
                </form>
            </div>

            <div className="new-listings">
                <h3 className="new-listings-heading">New Listings</h3>
                {submittedListings.map((listing) => (
                    <div className="new-form" key={listing.id}>
                        <Container className="card">
                            <div className="listing-details">
                                <button onClick={() => handleAvailabilityClick(listing.id)} className={availability[listing.id] ? "primary" : "secondary"}>
                                    {availability[listing.id] ? "Available!" : "Sold!"}
                                </button>
                                <img src={listing.image || ''} alt={listing.type || ''} />
                                <p>{listing.year || ''} {listing.make || ''}</p>
                                <p>{listing.model || ''}</p>
                                <p>Price: {listing.price || ''}</p>
                            </div>
                        </Container>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewCarForm;


























