import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import schoolData, {
  getSelectedSchool,
  saveSelectedSchool,
} from "../../assets/schoolData";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null); // 하나의 슬롯 선택 상태 추가

  useEffect(() => {
    // Retrieve cart items from localStorage when the component mounts
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);

    // Retrieve selected school and log it for debugging
    const school = getSelectedSchool();
    setSelectedSchool(school);
  }, []);

  useEffect(() => {
    // Calculate total price when the cart updates
    const total = cart.reduce((acc, item) => {
      const pricePerWeight = item.price[item.selectedWeight] || 0;
      return acc + pricePerWeight * item.quantity;
    }, 0);
    setTotalPrice(total);
  }, [cart]);

  const handleQuantityChange = (index, delta) => {
    const newCart = [...cart];
    const item = newCart[index];

    // Update quantity with the delta, ensuring it doesn't go below 1
    item.quantity = Math.max(1, (item.quantity || 1) + delta);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleRemoveItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleWeightChange = (index, event) => {
    const newCart = [...cart];
    const item = newCart[index];

    // Update selected weight
    item.selectedWeight = event.target.value;
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleSlotChange = (date) => {
    // 하나의 슬롯만 선택할 수 있도록 설정
    setSelectedSlot(date === selectedSlot ? null : date);
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
                  {/* Dropdown for weight selection */}
                  <div className="flex items-center">
                    <select
                      value={item.selectedWeight}
                      onChange={(e) => handleWeightChange(index, e)}
                      className="select mb-2 w-24 border-none outline-none text-sm p-1 focus:ring-0 focus:outline-none"
                      style={{
                        boxShadow: "none",
                        border: "none",
                        outline: "none",
                      }}
                    >
                      {Object.keys(item.price).map((weight) => (
                        <option
                          key={weight}
                          value={weight}
                          className="border-none outline-none"
                          style={{ border: "none", outline: "none" }}
                        >
                          {weight}
                        </option>
                      ))}
                    </select>

                    <p className="text-sm item text-gray-500 ml-4 text-center">
                      X $
                      {(
                        item.price[item.selectedWeight] * item.quantity
                      ).toFixed(2)}
                    </p>
                  </div>

                  <div className="flex justify-end items-center mt-1 ">
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
            {/* 날짜별 슬롯과 체크박스 표시 */}
            {selectedSchool && (
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold">Available Slots:</h3>
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
                            <div className="form-control  justify-center flex flex-row">
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
            <Link
              to={`/teambibimbap/payment`}
              className="w-full 
               flex justify-center items-center mt-4"
            >
              <button className="btn btn-primary w-full">
                Proceed to Payment
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-lg">No items in cart</p>
      )}
    </div>
  );
};

export default Cart;
