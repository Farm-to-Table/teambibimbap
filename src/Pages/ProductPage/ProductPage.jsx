import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import farms from "../../assets/farmsData";
import products from "../../assets/product/product";

const ProductPage = () => {
  const { farmName, productName: selectedProductName } = useParams();
  const farm = farms.find((farm) => farm.name === decodeURIComponent(farmName));

  if (!farm) {
    return <p>Farm not found!</p>;
  }

  let farmProducts = products.filter((product) => product.farm === farm.name);

  if (selectedProductName) {
    const selectedProduct = farmProducts.find(
      (product) => product.name === selectedProductName
    );
    if (selectedProduct) {
      farmProducts = farmProducts.filter(
        (product) => product.name !== selectedProductName
      );
      farmProducts.unshift(selectedProduct);
    }
  }

  if (farmProducts.length === 0) {
    return <p>No products available from this farm!</p>;
  }

  const [selectedWeight, setSelectedWeight] = useState("");
  const [quantity, setQuantity] = useState(1); // Default quantity set to 1
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const addToCart = (product) => {
    if (!selectedWeight) {
      setToastMessage("🚫 Please select a weight!");
      setShowToast(true);
      return;
    }

    const cartItem = {
      product: product.name,
      product_image: product.image1,
      price: product.price[selectedWeight],
      selectedWeight: selectedWeight,
      quantity: quantity,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = existingCart.findIndex(
      (item) =>
        item.product === cartItem.product &&
        item.selectedWeight === cartItem.selectedWeight
    );

    if (existingItemIndex !== -1) {
      existingCart[existingItemIndex].quantity += quantity;
    } else {
      existingCart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Update the toast message to include product details
    setToastMessage(
      `✅ ${quantity} x ${cartItem.selectedWeight} of ${cartItem.product} added to cart!`
    );
    setShowToast(true);

    // Set a timer to hide the toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-auto pb-32">
        <div
          className="hero min-h-sm"
          style={{ backgroundImage: `url(${farm.main_image})` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-2xl font-bold">
                {farm.name}'s Products
              </h1>
              {/* Added descriptive text about the farm */}
              <p className="mb-4 text-lg">
                Discover fresh and organic products from {farm.name}.
              </p>
              {/* Farm Info button moved inside the hero section */}
              <Link to={`/teambibimbap/farm/${farm.id}`} key={farm.id}>
                <button className="btn btn-square w-full border border-white bg-transparent text-white hover:bg-white hover:text-gray-800">
                  Learn About the Farm
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-3 gap-4">
          {farmProducts.map((product, index) => (
            <div
              key={index}
              className="flex flex-col border-2 p-4 rounded-lg shadow-lg bg-white"
            >
              <div className="relative w-full mb-4">
                <img
                  src={product.image1}
                  className="w-full h-48 object-cover rounded-lg"
                  alt={product.name}
                />
                {product.onStock ? (
                  <div className="absolute top-2 right-2 bg-primary text-white text-sm font-semibold rounded-full px-2 py-1">
                    Harvested
                  </div>
                ) : (
                  <div className="absolute top-2 right-2 bg-secondary text-white text-sm font-semibold rounded-full px-2 py-1">
                    Harvesting Soon
                  </div>
                )}
              </div>
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="mb-4 text-gray-700">{product.description}</p>

              {/* Weight and Price Table */}
              <div className="mb-4">
                <h3 className="font-semibold">Price by Weight:</h3>
                <div className="space-y-1">
                  {Object.entries(product.price).map(([weight, price]) => (
                    <div
                      key={weight}
                      className="flex justify-between items-center"
                    >
                      <span className="text-lg">{weight}</span>
                      <span className="text-lg font-bold">
                        ${price.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flex row for weight and quantity selection */}
              <div className="flex justify-between mt-2 bg-white">
                <select
                  onChange={(e) => setSelectedWeight(e.target.value)}
                  className="select select-bordered w-1/2 mr-2 outline-none focus:ring-0 bg-white"
                >
                  <option value="">Select Weight</option>
                  {Object.keys(product.price).map((weight) => (
                    <option key={weight} value={weight}>
                      {weight}
                    </option>
                  ))}
                </select>

                {/* Quantity selection */}
                <div className="flex items-center w-1/2 bg-white">
                  <label className="mr-2 text-lg">Quantity:</label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="border border-gray-300 rounded-md w-16 p-1 text-center bg-white"
                  />
                </div>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="btn btn-primary mt-4 w-full"
                disabled={!selectedWeight} // Disable button if no weight is selected
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="toast toast-top toast-center z-50">
          <div className="alert alert-success bg-green-500 text-white shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
            <div>
              <span>{toastMessage}</span>
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

      <div className="fixed bottom-12 left-0 right-0 bg-gray-300 p-3 flex justify-between">
        {/* Removed Farm Info button here since it's now in the hero section */}
      </div>
    </div>
  );
};

export default ProductPage;
