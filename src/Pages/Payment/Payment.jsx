import React, { useState, useEffect } from "react";
import "./Pament.css";
import { Link } from "react-router-dom";

const Payment = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // Fetch cart items from localStorage and calculate the total amount
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cartData);

    // Calculate total price based on each item's price and quantity
    const total = cartData.reduce((acc, item) => {
      const price = item.price; // Assuming price is a single value
      return acc + price * item.quantity; // Calculate total
    }, 0);

    setTotalAmount(total);
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // Retrieve the current order details from localStorage
    const orderDetails = JSON.parse(localStorage.getItem("orderDetails"));

    if (orderDetails) {
      // Update the status to 'paid'
      orderDetails.status = "paid";
      document.getElementById("my_modal_5").showModal();
      // Save the updated order details back to localStorage
      localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
      localStorage.removeItem("cart"); // Clear the cart from localStorage
    } else {
      console.error("Order details not found in localStorage");
    }
  };

  return (
    <div className="max-w-md mx-auto p-3 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">PAYMENT</h2>

      <div className="bg-purple-600 text-white p-5 rounded-lg mb-6 h-52 card_bg">
        <div className="flex justify-between items-center mb-4">
          <div className="logo w-full flex justify-end p-3 ">
            <img
              src="https://raw.githubusercontent.com/dasShounak/freeUseImages/main/Visa-Logo-PNG-Image.png"
              alt="Visa"
              className="w-16"
            />
          </div>
        </div>
        <div>
          <img
            src="https://raw.githubusercontent.com/dasShounak/freeUseImages/main/chip.png"
            alt="chip"
            className="w-10 h-6"
          />
        </div>
        <div className="flex justify-center text-center">
          <span className="text-xl tracking-widest w-full">
            •••• •••• •••• 8014
          </span>
        </div>
        <div className="flex justify-between items-center text-sm mt-10">
          <span>KELLY OLIVER</span>
          <span>08/21</span>
        </div>
      </div>

      <form className="space-y-4 w-full p-3 rounded-t-lg shadow-gray-700 shadow-md">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            CARD HOLDER NAME
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="KELLY OLIVER"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            CARD NUMBER
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="XXXX XXXX XXXX 8014"
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              EXPIRY
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="08/21"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CVV
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="XXX"
            />
          </div>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" id="saveCard" />
          <label htmlFor="saveCard" className="text-sm text-gray-600">
            Save this card for future payments
          </label>
        </div>
        <div className="mt-6">
          <div className="flex flex-col justify-between items-center mb-2">
            <div className="w-full flex flex-col space-y-2">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center w-full text-sm text-gray-400"
                >
                  <span>
                    {item.product} x {item.quantity}
                  </span>
                  <span>
                    ${(item.price * item.quantity).toFixed(2)}{" "}
                    {/* Adjusted for total price */}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider for clarity */}
            <div className="border-t border-gray-300 w-full my-2"></div>

            <div className="w-full flex justify-between items-center mt-2">
              <span className="font-medium text-lg">TOTAL</span>
              <span className="font-bold text-lg">
                ${totalAmount.toFixed(2)}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
            onClick={handleOnSubmit}
          >
            PROCEED TO PAY
          </button>
        </div>
      </form>

      <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
        <div className="modal-box bg-white rounded-lg shadow-lg p-6">
          <h3 className="font-bold text-xl text-green-600 mb-4 flex items-center">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/checkmark.png" // Replace with your success image URL
              alt="Success"
              className="w-8 h-8 mr-2"
            />
            Payment Successful!
          </h3>
          <p className="py-2 text-gray-700">
            Your payment has been processed successfully. Thank you for your
            purchase!
          </p>
          <div className="modal-action">
            <form method="dialog">
              <Link to="/teambibimbap/">
                <button className="btn btn-primary">Back to Main</button>
              </Link>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Payment;
