import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import product from "../../assets/product/product";

const Fruit = () => {
  const [isOrganicOnly, setIsOrganicOnly] = useState(false);
  const [isWonkeyOnly, setIsWonkeyOnly] = useState(false);
  const [sortOption, setSortOption] = useState("");
  const [isScoreHighToLow, setIsScoreHighToLow] = useState(true);
  const [sortedFruit, setSortedFruit] = useState([]);

  useEffect(() => {
    const filteredFruit = product.filter((product) => {
      const organicCondition = isOrganicOnly ? product.organic : true;
      const wonkeyCondition = isWonkeyOnly ? product.wonkey : true;
      const categoryCondition = product.category === "fruit";
      return organicCondition && wonkeyCondition && categoryCondition;
    });

    const sorted = [...filteredFruit].sort((a, b) => {
      if (sortOption === "score") {
        return isScoreHighToLow ? b.score - a.score : a.score - b.score;
      }
      return 0;
    });

    setSortedFruit(sorted);
  }, [isOrganicOnly, isWonkeyOnly, sortOption, isScoreHighToLow]);

  const toggleScoreSort = () => {
    setSortOption("score");
    setIsScoreHighToLow(!isScoreHighToLow);
  };

  return (
    <div>
      <div className="px-2 flex flex-row justify-end gap-3 items-center border-b-2">
        <div className="form-control flex flex-row">
          <label className="cursor-pointer label gap-2">
            <input
              type="checkbox"
              checked={isOrganicOnly}
              className="checkbox checkbox-success"
              onChange={() => setIsOrganicOnly(!isOrganicOnly)}
            />
            <span className="label-text">Organic</span>
          </label>
          <label className="cursor-pointer label gap-2">
            <input
              type="checkbox"
              checked={isWonkeyOnly}
              className="checkbox checkbox-warning"
              onChange={() => setIsWonkeyOnly(!isWonkeyOnly)}
            />
            <span className="label-text">Wonkey</span>
          </label>
        </div>

        <div className="text-sm flex flex-row gap-2">
          <button className="btn btn-xs btn-outline" onClick={toggleScoreSort}>
            Score {isScoreHighToLow ? "↓" : "↑"}
          </button>
        </div>
      </div>

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
                    {[...Array(5)].map((_, i) => (
                      <input
                        key={i}
                        type="radio"
                        name={`rating-${product.id}`}
                        className={`mask mask-star-2 bg-orange-400 w-2 ${
                          i < Math.round(product.score) ? "checked" : ""
                        }`}
                        checked={i < Math.round(product.score)}
                        readOnly
                      />
                    ))}
                  </div>
                </div>
                <p>{product.farm}</p>
                <p className="text-xs">{product.description}</p>
                <p className="text-sm font-semibold">
                  Score: {product.score.toFixed(1)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Fruit;
