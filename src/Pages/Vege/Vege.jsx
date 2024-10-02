import React, { useState } from "react";
import { Link } from "react-router-dom";
import product from "../../assets/product/product";

const Vege = () => {
  // State for managing the organic and wonkey filters and sorting option
  const [isOrganicOnly, setIsOrganicOnly] = useState(false); // Filter for organic products
  const [isWonkeyOnly, setIsWonkeyOnly] = useState(false); // Filter for wonkey products
  const [sortOption, setSortOption] = useState(""); // Sorting option
  const [isScoreHighToLow, setIsScoreHighToLow] = useState(true); // State to toggle score sorting

  // Handle filtering for organic and wonkey products
  const filteredFruit = product.filter((product) => {
    // Filter by organic and wonkey conditions
    const organicCondition = isOrganicOnly ? product.organic : true;
    const wonkeyCondition = isWonkeyOnly ? product.wonkey : true;
    const categoryCondition = product.category === "vege"; // Add category filter

    return organicCondition && wonkeyCondition && categoryCondition; // Return the combined condition
  });

  // Handle sorting by name or score
  const sortedFruit = [...filteredFruit].sort((a, b) => {
    if (sortOption === "name") {
      return a.name.localeCompare(b.name); // Sort alphabetically by name
    }
    if (sortOption === "score") {
      return isScoreHighToLow ? b.score - a.score : a.score - b.score; // Sort by score (high to low or low to high)
    }
    return 0; // Default: no sorting
  });

  // Toggle score sorting
  const toggleScoreSort = () => {
    setSortOption("score");
    setIsScoreHighToLow(!isScoreHighToLow);
  };

  return (
    <div>
      {/* Filter section */}
      <div className="px-2 flex flex-row justify-end gap-3 items-center border-b-2">
        <div className="form-control flex flex-row">
          <label className="cursor-pointer label gap-2">
            <input
              type="checkbox"
              checked={isOrganicOnly}
              className="checkbox checkbox-success"
              onChange={() => setIsOrganicOnly(!isOrganicOnly)} // Toggle organic filter
            />
            <span className="label-text">Organic</span>
          </label>
          <label className="cursor-pointer label gap-2">
            <input
              type="checkbox"
              checked={isWonkeyOnly}
              className="checkbox checkbox-warning"
              onChange={() => setIsWonkeyOnly(!isWonkeyOnly)} // Toggle wonkey filter
            />
            <span className="label-text">Wonkey</span>
          </label>
        </div>

        {/* Sorting options */}
        <div className="text-sm flex flex-row gap-2">
          <button className="btn btn-xs btn-outline" onClick={toggleScoreSort}>
            Score {isScoreHighToLow ? "↑" : "↓"}
          </button>
        </div>
      </div>

      {/* Product listing */}
      <div>
        {sortedFruit.map((product, index) => (
          <Link to={`/teambibimbap/product/${product.farm}`} key={index}>
            <div className="shadow-lg rounded-lg flex flex-row justify-center items-center relative m-3">
              <div className="absolute top-2 -left-2">
                {product.onStock && (
                  <div className="relative flex items-center justify-center">
                    <span className="absolute inline-flex h-5 w-5 rounded-full bg-purple-400 opacity-75 animate-ping"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-purple-500"></span>
                  </div>
                )}
              </div>

              <div className="w-2/5">
                <img
                  className="w-full rounded-lg"
                  src={product.image1}
                  alt={product.name}
                />
              </div>
              <div className="p-3 w-3/5">
                <div className="flex flex-row justify-between items-center">
                  <p className="font-bold">{product.name}</p>
                  <div className="rating flex items-center">
                    {/* Render stars based on product score */}
                    {[...Array(5)].map((_, i) => (
                      <input
                        key={i}
                        type="radio"
                        name={`rating-${product.id}`}
                        className={`mask mask-star-2 bg-orange-400 w-2 ${
                          i < product.score ? "checked" : ""
                        }`}
                        defaultChecked={i < product.score} // Activate star based on score
                        readOnly
                      />
                    ))}
                  </div>
                </div>
                <p>{product.farm}</p>
                <p className="text-xs">{product.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Vege;
