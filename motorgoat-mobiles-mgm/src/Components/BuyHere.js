import React from "react";
import "./BuyHere.css"; // Import the new CSS

function BuyHere({ cart, removeFromCart }) {
    const TAX_RATE = 0.08; // Example tax rate (8%)
    const DISCOUNT = 0; // Example discount (0% for now)

    const parsePrice = (price) => {
        if (typeof price === 'string') {
            // Remove the dollar sign and convert to a float
            return parseFloat(price.replace('$', '').replace(',', ''));
        }
        return price;
    };

    const calculateTotal = () => {
        const subtotal = cart.reduce((acc, item) => acc + parsePrice(item.price), 0);
        const taxes = subtotal * TAX_RATE;
        const discount = subtotal * DISCOUNT;
        const total = subtotal + taxes - discount;
        return { subtotal, taxes, discount, total };
    };

    const { subtotal, taxes, discount, total } = calculateTotal();

    return (
        <div className="buy-here-container">
            <h2 className="centered-text">Buy Here!</h2>
            {cart.length === 0 ? (
                <p className="centered-text">Add potential rides here!</p>
            ) : (
                <div className="cart-content">
                    <div className="listings-container" style={{ justifyContent: 'flex-start' }}>
                        {cart.map((item, index) => (
                            <div key={index} className="listing">
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className={`status-button ${!item.available ? 'sold' : ''}`}
                                >
                                    {item.available ? "Available!" : "Sold!"}
                                </button>
                                <img src={item.image} alt={item.type} />
                                <p>{item.year} {item.make}</p>
                                <p>{item.model}</p>
                                <p>Miles: {item.mileage}</p>
                                <p>Price: ${parsePrice(item.price).toFixed(2)}</p>
                                <div className="button-container">
                                    <button onClick={() => removeFromCart(item.id)} className="remove-button">Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="summary-container">
                        <h3>Order Summary</h3>
                        {cart.map((item, index) => (
                            <p key={index}>{item.year} {item.make} {item.model}: ${parsePrice(item.price).toFixed(2)}</p>
                        ))}
                        <div className="separator"></div>
                        <p>Subtotal: ${subtotal.toFixed(2)}</p>
                        <p>Taxes: ${taxes.toFixed(2)}</p>
                        <p>Discounts: ${discount.toFixed(2)}</p>
                        <h4>Total: ${total.toFixed(2)}</h4>
                        <button className="complete-purchase-button">Complete Purchase</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BuyHere;
