import React, { useEffect, useState, useRef } from "react";
import logo from "../../assets/logo.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import schoolData, { getSelectedSchool } from "../../assets/schoolData";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const isMounted = useRef(true);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    const school = getSelectedSchool();
    setSelectedSchool(school);

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      const pricePerWeight = item.price;
      return acc + pricePerWeight * item.quantity;
    }, 0);
    setTotalPrice(total);
  }, [cart]);

  const handleQuantityChange = (index, delta) => {
    if (isMounted.current) {
      const newCart = [...cart];
      const item = newCart[index];
      item.quantity = Math.max(1, (item.quantity || 1) + delta);
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  const handleRemoveItem = (index) => {
    if (isMounted.current) {
      const newCart = cart.filter((_, i) => i !== index);
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  const handleWeightChange = (index, event) => {
    if (isMounted.current) {
      const newCart = [...cart];
      const item = newCart[index];
      item.selectedWeight = event.target.value;
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!selectedSchool) {
      setToastMessage("Please select a school before proceeding.");
      setShowToast(true);
    } else if (!selectedSlot) {
      setToastMessage("Please select a slot before proceeding.");
      setShowToast(true);
    } else {
      const orderDetails = {
        date: selectedSlot,
        school: selectedSchool,
        cart: cart,
        totalPrice: totalPrice,
        status: "Pending",
      };
      localStorage.setItem("orderDetails", JSON.stringify(orderDetails));

      setTimeout(() => {
        if (isMounted.current) {
          navigate("/teambibimbap/payment");
        }
      }, 0);
    }
  };

  const handleSlotChange = (date) => {
    if (isMounted.current) {
      setSelectedSlot(date === selectedSlot ? null : date);
    }
  };

  return (
    <div className="p-4 h-full">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length > 0 ? (
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center border-b border-gray-300 py-3"
              >
                <img
                  src={item.product_image || logo}
                  alt={item.product}
                  className="w-20 h-20 object-cover border border-gray-300 rounded-lg mr-4"
                />
                <div className="flex-grow flex flex-col w-full">
                  <div className="text-center">
                    <p className="text-lg font-semibold">{item.product}</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm text-gray-500 ml-4 text-center">
                      {item.selectedWeight}
                    </p>
                    <p className="text-sm text-gray-500 ml-4 text-center">
                      X $ {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <div className="flex justify-end items-center mt-1">
                    <button
                      onClick={() => handleQuantityChange(index, -1)}
                      className="btn btn-sm btn-warning"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity || 1}</span>
                    <button
                      onClick={() => handleQuantityChange(index, 1)}
                      className="btn btn-sm btn-warning"
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleRemoveItem(index)}
                      className="btn btn-sm btn-error ml-2"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {selectedSchool && (
              <div className="mt-4 text-center">
                <table className="table-auto w-full mt-2">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 p-2">Date</th>
                      <th className="border border-gray-300 p-2">
                        Available Slots
                      </th>
                      <th className="border border-gray-300 p-2">Select</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(selectedSchool.slot).map(
                      ([date, available]) => (
                        <tr key={date}>
                          <td className="border border-gray-300 p-2">{date}</td>
                          <td className="border border-gray-300 p-2">
                            {available}
                          </td>
                          <td className="border border-gray-300 p-2">
                            <div className="form-control justify-center flex flex-row">
                              <input
                                type="checkbox"
                                checked={selectedSlot === date}
                                onChange={() => handleSlotChange(date)}
                                className="checkbox checkbox-info"
                              />
                            </div>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            )}

            <div className="mt-4">
              <h3 className="font-bold text-lg text-end">
                Total Price: ${totalPrice.toFixed(2)}
              </h3>
            </div>

            <button
              className={`btn ${
                selectedSchool && selectedSlot ? "btn-primary" : "btn-warning"
              } w-full`}
              onClick={handleOnSubmit}
            >
              {selectedSchool && selectedSlot
                ? "Proceed to Payment"
                : "Select a slot to continue."}
            </button>
          </div>
        </div>
      ) : (
        <p className="text-lg">No items in cart</p>
      )}

      {showToast && (
        <div className="toast toast-top toast-center w-full ">
          <div className="alert alert-error flex flex-row">
            <div>
              <span>{toastMessage}</span>
            </div>
            <div className="flex-none">
              <button
                className="btn btn-sm btn-circle btn-ghost"
                onClick={() => setShowToast(false)}
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
