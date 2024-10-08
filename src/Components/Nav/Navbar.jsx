import { React, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { CiBellOn } from "react-icons/ci";
import farms from "../../assets/farmsData";

// Custom event for localStorage changes
const localStorageChanged = new Event("localStorageChanged");

// Wrap localStorage setItem to dispatch the custom event
const originalSetItem = localStorage.setItem;
localStorage.setItem = function (key, value) {
  originalSetItem.apply(this, arguments);
  if (key === "orderDetails") {
    window.dispatchEvent(localStorageChanged);
  }
};

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [orders, setOrders] = useState(null);
  const navigate = useNavigate();
  const notificationTimer = useRef(null);

  const loadOrderDetails = () => {
    const orderDetails = JSON.parse(localStorage.getItem("orderDetails"));
    setOrders(orderDetails);
  };

  useEffect(() => {
    loadOrderDetails();

    const handleStorageChange = () => {
      loadOrderDetails();
    };

    window.addEventListener("localStorageChanged", handleStorageChange);
    window.addEventListener("storage", handleStorageChange); // For changes from other tabs

    return () => {
      window.removeEventListener("localStorageChanged", handleStorageChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    if (orders && orders.status === "paid" && !showNotification) {
      // Clear any existing timer
      if (notificationTimer.current) {
        clearTimeout(notificationTimer.current);
      }

      // Set a new timer
      notificationTimer.current = setTimeout(() => {
        setShowNotification(true);
      }, 5000);
    } else if (!orders || orders.status !== "paid") {
      // Clear the timer and hide notification if status is not "paid"
      if (notificationTimer.current) {
        clearTimeout(notificationTimer.current);
      }
      setShowNotification(false);
    }

    // Cleanup function to clear the timer when component unmounts or orders change
    return () => {
      if (notificationTimer.current) {
        clearTimeout(notificationTimer.current);
      }
    };
  }, [orders]);

  const handleOnChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    const results = farms
      .flatMap((farm) =>
        farm.products
          .filter((product) =>
            product.product.toLowerCase().includes(value.toLowerCase())
          )
          .map((product) => ({
            ...product,
            farmId: farm.id, // Add farm ID here
            farmName: farm.name,
          }))
      )
      .filter(Boolean);

    setFilteredResults(results);
    setShowDropdown(value.length > 0);
  };

  const handleProductClick = (farmId) => {
    // Navigate to the appropriate farm/product page if necessary
    setSearch("");
    setFilteredResults([]);
    setShowDropdown(false);
    navigate(`/teambibimbap/farm/${farmId}`);
  };

  return (
    <div className="border-b-base-300 p-3 flex flex-row sm:flex-row items-center justify-between align-middle">
      <Link to="/teambibimbap/">
        <div className="flex items-center mb-4 md:mb-0">
          <img src={logo} alt="logo" width="100rem" className="mr-4" />
        </div>
      </Link>
      <div className="w-full md:w-1/2 mb-4 md:mb-0 relative bg-white">
        <label className="input flex items-center gap-2 w-full border-0 focus-within:outline-none focus-within:ring-0 bg-white">
          <input
            type="text"
            className="grow border-0 outline-none focus:ring-0 bg-white"
            placeholder="Search"
            onChange={handleOnChange}
            value={search}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        {showDropdown && (
          <ul className="absolute bg-white border border-gray-300 w-full rounded-lg shadow-lg z-10 mt-1">
            {filteredResults.length > 0 ? (
              filteredResults.map((item, index) => (
                <li key={index}>
                  <div
                    className="flex items-center cursor-pointer hover:bg-base-300 p-2 transition-colors duration-200"
                    onClick={() => handleProductClick(item.farmId)}
                  >
                    <img
                      src={item.product_image1}
                      alt={item.product}
                      className="w-12 h-12 mr-2 rounded"
                    />
                    <span className="font-bold">{`${item.product} - ${item.farmName}`}</span>
                  </div>
                </li>
              ))
            ) : (
              <li className="p-2 text-center">
                <span role="img" aria-label="no-results" className="mr-2">
                  😞
                </span>
                No results found
              </li>
            )}
          </ul>
        )}
      </div>
      <div className="flex items-center mb-4 md:mb-0">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-white border-none relative"
          >
            <CiBellOn className="text-3xl" />
            {showNotification && (
              <div className="absolute top-0 right-2 flex items-center justify-center">
                <span className="absolute inline-flex h-5 w-5 rounded-full bg-blue-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
              </div>
            )}
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-64 p-2 shadow "
          >
            {orders ? (
              <li>
                <div className="p-2 flex flex-col bg-white">
                  <div className="text-start w-full">
                    <h3 className="font-bold">
                      Fresh box is delivering now! 🚚
                    </h3>
                  </div>
                  <div className="w-full text-start flex-row flex ">
                    <p>Date: {orders.date}</p>
                    <p>School: {orders.school.name}</p>
                    <p>Slot: A10</p>
                  </div>
                </div>
              </li>
            ) : (
              <li>
                <a>No recent orders</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
