import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';

function NewCarForm({ setListings }) {
    const [newListing, setNewListing] = useState(null)
    const [inputValues, setInputValues] = useState({})
    
    useEffect(() => {
        const storedListing = JSON.parse(localStorage.getItem("newListing"))
        if (storedListing) {
            setNewListing(storedListing)
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

        const submittedListing = { ...inputValues }
        setListings((prevListings) => [submittedListing, ...prevListings])
        setNewListing(submittedListing)
        localStorage.setItem("newListing", JSON.stringify(submittedListing))
        setInputValues({})
    }

    function handleDelete() {
        setNewListing(null)
        localStorage.removeItem("newListing")
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
            {newListing && (
                <div>
                    <h3>New Listing:</h3>
                    <Container className="card" data-testid={"car-item"} >
                        <img src={newListing.image || ''} alt={newListing.type || ''} />
                        <p>{newListing.year || ''} {newListing.make || ''}</p>
                        <p>{newListing.model || ''}</p>
                        <p>Price: {newListing.price || ''}</p>
                        <button onClick={handleDelete}>Delete</button>
                    </Container>
                </div>
            )}
        </div>
    );
}

export default NewCarForm;





















