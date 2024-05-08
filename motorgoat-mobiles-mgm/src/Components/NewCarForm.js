import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import "../App.css";

function NewCarForm() {
    const [inputValues, setInputValues] = useState({})
    const [submittedListings, setSubmittedListings] = useState([])

    useEffect(() => {
        const storedListings = JSON.parse(localStorage.getItem("submittedListings"))
        if (storedListings) {
            setSubmittedListings(storedListings)
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

        const newListing = { ...inputValues }
        setSubmittedListings((prevListings) => [...prevListings, newListing])
        localStorage.setItem("submittedListings", JSON.stringify([...submittedListings, newListing]))
        setInputValues({})
    }

    return (
        <div className="new-car-form">
            <form onSubmit={handleSubmit}>
                <h2>💲 Sell Your Car Here! 💲</h2>
                <input type="text" name="type" placeholder="Type" value={inputValues.type || ''} onChange={handleInputChange} />
                <input type="text" name="year" placeholder="Year" value={inputValues.year || ''} onChange={handleInputChange} />
                <input type="text" name="make" placeholder="Make" value={inputValues.make || ''} onChange={handleInputChange} />
                <input type="text" name="model" placeholder="Model" value={inputValues.model || ''} onChange={handleInputChange} />
                <input type="text" name="image" placeholder="Image URL" value={inputValues.image || ''} onChange={handleInputChange} />
                <input type="text" name="price" placeholder="Price" value={inputValues.price || ''} onChange={handleInputChange} />
                <button type="submit">Sell!</button>
            </form>

            {submittedListings.map((listing, index) => (
                <div key={index}>
                    <h3>New Listing:</h3>
                    <Container className="card" data-testid={`car-item-${index}`}>
                        <img src={listing.image || ''} alt={listing.type || ''} />
                        <p>{listing.year || ''} {listing.make || ''}</p>
                        <p>{listing.model || ''}</p>
                        <p>Price: {listing.price || ''}</p>
                    </Container>
                </div>
            ))}
        </div>
    );
}

export default NewCarForm;






















