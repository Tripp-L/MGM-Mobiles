import React, { useState } from "react";
import "./GetApprovedForm.css";

const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
    "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
    "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
    "Wisconsin", "Wyoming"
];

function GetApprovedForm() {
    const [inputValues, setInputValues] = useState({});
    const [submitted, setSubmitted] = useState(false);

    function handleInputChange(e) {
        const { name, value } = e.target;
        setInputValues((prevValues) => ({ ...prevValues, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        // Here you can also handle form submission to the backend
        console.log("Form submitted:", inputValues);
    }

    if (submitted) {
        return (
            <div className="thank-you-message">
                <h2>Thank you for your application! Someone from our finance department will contact you shortly!</h2>
            </div>
        );
    }

    return (
        <div className="get-approved-form">
            <form onSubmit={handleSubmit}>
                <h2 className="form-heading">Get Approved</h2>

                <h3 className="section-heading">Customer Information</h3>
                <div className="form-group">
                    <input type="text" name="name" placeholder="Name" value={inputValues.name || ''} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <input type="text" name="address" placeholder="Address" value={inputValues.address || ''} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <input type="text" name="city" placeholder="City" value={inputValues.city || ''} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <select name="state" value={inputValues.state || ''} onChange={handleInputChange}>
                        <option value="">Select State</option>
                        {states.map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <input type="text" name="zip" placeholder="Zip" value={inputValues.zip || ''} onChange={handleInputChange} />
                </div>

                <h3 className="section-heading">Contact Information</h3>
                <div className="form-group">
                    <input type="email" name="email" placeholder="Email" value={inputValues.email || ''} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <input type="text" name="phone" placeholder="Phone Number" value={inputValues.phone || ''} onChange={handleInputChange} />
                </div>

                <h3 className="section-heading">Finance Information</h3>
                <div className="form-group">
                    <input type="text" name="employer" placeholder="Current Employer" value={inputValues.employer || ''} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <input type="text" name="salary" placeholder="Salary" value={inputValues.salary || ''} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <input type="text" name="ssn" placeholder="SSN (last 4 digits)" value={inputValues.ssn || ''} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="bankStatements">Bank Statements</label>
                    <input type="file" name="bankStatements" id="bankStatements" onChange={handleInputChange} />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default GetApprovedForm;
