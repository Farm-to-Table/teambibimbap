import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import farms from "../../assets/farmsData";
import fruit from "../../assets/product/fruit/fruit";

const ProductPage = () => {
  const { id } = useParams();
  const farm = farms.find((farm) => farm.id === Number(id));
  const product = fruit.find((fruit) => fruit.id === Number(id));

  if (!farm || !product) {
    return <p>Farm or product not found!</p>;
  }

  const slides = [product.image1, product.image2, product.image3].filter(
    Boolean
  );
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = (e) => {
    e.preventDefault();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (e) => {
    e.preventDefault();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const addToCart = () => {
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
                {farm.name}'s {product.name}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row p-3 gap-4">
          <div className="w-1/2 flex flex-col">
            <div className="relative flex-grow">
              <div className="w-full h-64">
                <img
                  src={slides[currentSlide]}
                  className="w-full h-full object-cover rounded-lg"
                  alt={`Slide ${currentSlide + 1}`}
                  style={{ objectFit: "cover" }}
                />
              </div>
              {slides.length > 1 && (
                <div className="absolute right-2 bottom-2 flex justify-between gap-2">
                  <button
                    onClick={prevSlide}
                    className="btn btn-circle btn-sm btn-warning"
                  >
                    ❮
                  </button>
                  <button
                    onClick={nextSlide}
                    className="btn btn-circle btn-sm btn-warning"
                  >
                    ❯
                  </button>
                </div>
              )}
            </div>
            <div className="flex gap-2 mt-2">
              {product.organic && (
                <span className="badge badge-success">Organic</span>
              )}
              {product.wonkey && (
                <span className="badge badge-warning">Wonkey</span>
              )}
            </div>
          </div>

          <div className="w-1/2 flex flex-col justify-between border-2 p-4 rounded-lg">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{product.name}</h2>
                <div className="badge badge-accent badge-lg">
                  {product.score} ★
                </div>
              </div>
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
            </div>
            <div className="mt-4">
              {product.onStock ? (
                <div className="badge badge-info badge-lg">In Stock</div>
              ) : (
                <div className="badge badge-error badge-lg">Out of Stock</div>
              )}
            </div>
          </div>
        </div>

        <div className="px-3 pt-3 pb-10 mx-3 bg-base-200 rounded-lg">
          <p className="italic">"{product.description}"</p>
        </div>
      </div>

      <div className="fixed bottom-12 left-0 right-0 bg-gray-300 p-3 flex justify-between">
        <button className="btn btn-square btn-info w-2/6">
          <Link to={`/farm/${product.id}`} key={product.id}>
            Farm Info
          </Link>
        </button>
        <button
          onClick={addToCart}
          className="btn btn-square btn-primary w-2/6"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
