import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import farms from "../../assets/farmsData";
import products from "../../assets/product/product";

const ProductPage = () => {
  // Destructure the farmName and productName from useParams
  const { farmName, productName: selectedProductName } = useParams();
  console.log(farmName, selectedProductName);
  // Find the farm by name
  const farm = farms.find((farm) => farm.name === decodeURIComponent(farmName));

  // If farm is not found, show an error message
  if (!farm) {
    return <p>Farm not found!</p>;
  }

  // Find products that belong to the specific farm
  let farmProducts = products.filter((product) => product.farm === farm.name);

  // If there is a selected product name, move it to the top
  if (selectedProductName) {
    const selectedProduct = farmProducts.find(
      (product) => product.name === selectedProductName
    );
    if (selectedProduct) {
      // Remove the selected product from its current position
      farmProducts = farmProducts.filter(
        (product) => product.name !== selectedProductName
      );
      // Add the selected product at the beginning of the array
      farmProducts.unshift(selectedProduct);
    }
  }

  // If no products are found for the farm, show a message
  if (farmProducts.length === 0) {
    return <p>No products available from this farm!</p>;
  }

  const addToCart = (product) => {
    const cartItem = {
      product: product.name,
      product_image: product.image1, // Use the first image for cart
      price: product.price, // Include the entire price object
      selectedWeight: Object.keys(product.price)[0], // Set default weight
      quantity: 1, // Start with quantity 1
    };

    // Get existing cart items from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add new item to cart
    existingCart.push(cartItem);

    // Save updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert("Item added to cart!");
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
            </div>
          </div>
        </div>

        {/* Map through farmProducts to display each product */}
        <div className="flex flex-col p-3 gap-4">
          {farmProducts.map((product, index) => (
            <div key={index} className="flex flex-row border-2 p-4 rounded-lg">
              <div className="w-1/3">
                <img
                  src={product.image1}
                  className="w-full h-32 object-cover rounded-lg"
                  alt={product.name}
                />
              </div>
              <div className="w-2/3 flex flex-col justify-between p-2">
                <h2 className="text-xl font-bold">{product.name}</h2>
                <div className="space-y-2">
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
                <div className="mt-2">
                  {product.onStock ? (
                    <div className="badge badge-info badge-lg">In Stock</div>
                  ) : (
                    <div className="badge badge-error badge-lg">
                      Out of Stock
                    </div>
                  )}
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="btn btn-primary mt-2"
                >
                  Add to Cart, 무게 선택해서 추가
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-12 left-0 right-0 bg-gray-300 p-3 flex justify-between">
        <Link to={`/teambibimbap/farm/${farm.id}`} key={farm.id}>
          <button className="btn btn-square btn-info w-full p-3">
            Farm Info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;
