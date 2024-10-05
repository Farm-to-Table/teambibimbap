import React, { useEffect, useState } from "react";
import { CiShoppingCart, CiMap, CiHome } from "react-icons/ci";
import { Link } from "react-router-dom";

// Custom event for localStorage changes
const LOCAL_STORAGE_EVENT = "localStorageChanged";

// Wrap localStorage methods to dispatch the custom event
const wrapStorageMethod = (methodName) => {
  const original = localStorage[methodName];
  return function (key, value) {
    const result = original.apply(this, arguments);
    if (key === "cart") {
  
      
      window.dispatchEvent(new Event(LOCAL_STORAGE_EVENT));
    }
    return result;
  };
};

localStorage.setItem = wrapStorageMethod("setItem");
localStorage.removeItem = wrapStorageMethod("removeItem");

const buttons = [
  { icon: <CiHome />, link: "/teambibimbap/", type: "home" },
  { icon: <CiShoppingCart />, link: "/teambibimbap/cart", type: "cart" },
  { icon: <CiMap />, link: "/teambibimbap/map", type: "map" },
];

const Mobile_Nav = () => {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cart.reduce((total, item) => total + (item.quantity || 0), 0);

    setCartCount(count);
  };

  useEffect(() => {
    updateCartCount(); // Initial count

    const handleStorageChange = () => {
   
      updateCartCount();
    };

    window.addEventListener(LOCAL_STORAGE_EVENT, handleStorageChange);
    window.addEventListener("storage", handleStorageChange);

    return () => {

      window.removeEventListener(LOCAL_STORAGE_EVENT, handleStorageChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);


  return (
    <div className="h-12 fixed bottom-0 left-0 right-0 flex flex-row justify-center items-center space-x-4 font-bold bg-white border-t-2 border-black py-2">
      {buttons.map((button, index) => (
        <Link
          to={button.link}
          key={index}
          className="text-2xl text-red-500 hover:bg-red-100 hover:text-red-700 hover:rounded-full p-1 transition-all duration-300 relative"
        >
          <div className="flex justify-center items-center w-10 h-10">
            {button.icon}
            {button.type === "cart" && cartCount > 0 && (
              <div className="badge badge-secondary absolute top-4 right-3 transform translate-x-1/2 -translate-y-1/2">
                {cartCount}
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Mobile_Nav;
