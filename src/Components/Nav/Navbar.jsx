import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../../assets/logo.png";
import { CiBellOn } from "react-icons/ci";
import farms from "../../assets/farmsData"; // Ensure the farms data is imported

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility
  const navigate = useNavigate(); // Initialize navigate

  const handleOnChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    // Filter farms based on farm name and product names
    const results = farms.filter(
      (farm) =>
        farm.name.toLowerCase().includes(value.toLowerCase()) ||
        farm.products.some((product) =>
          product.product.toLowerCase().includes(value.toLowerCase())
        )
    );

    setFilteredResults(results);
    setShowDropdown(value.length > 0); // Show dropdown if there's input
  };

  const handleFarmClick = (id) => {
    // Navigate to the farm detail page
    navigate(`/teambibimbap/farm/${id}`);
    setSearch(""); // Clear search input
    setFilteredResults([]); // Clear filtered results
    setShowDropdown(false); // Hide dropdown
  };

  return (
    <div className="border-b-base-300 p-3 flex flex-row sm:flex-row items-center justify-between align-middle">
      <Link to="/teambibimbap">
        <div className="flex items-center mb-4 md:mb-0">
          <img src={logo} alt="logo" width="100rem" className="mr-4" />
        </div>
      </Link>
      <div className="w-full md:w-1/2 mb-4 md:mb-0 relative">
        <label className="input flex items-center gap-2 w-full border-0 focus-within:outline-none focus-within:ring-0">
          <input
            type="text"
            className="grow border-0 outline-none focus:ring-0"
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
        {/* Dropdown for search results */}
        {showDropdown && (
          <ul className="absolute bg-white border border-gray-300 w-full rounded-lg shadow-lg z-10 mt-1">
            {filteredResults.length > 0 ? (
              filteredResults.map((farm, index) => {
                const farmMatches = farm.name
                  .toLowerCase()
                  .includes(search.toLowerCase());
                const productMatches = farm.products.filter((product) =>
                  product.product.toLowerCase().includes(search.toLowerCase())
                );

                return (
                  <li key={index}>
                    {/* Display the farm name if it matches the search */}
                    {farmMatches && (
                      <div
                        className="flex items-center cursor-pointer hover:bg-base-300 p-2 transition-colors duration-200"
                        onClick={() => handleFarmClick(farm.id)}
                      >
                        <img
                          src={farm.image}
                          alt={farm.name}
                          className="w-12 h-12 mr-2 rounded"
                        />
                        <span className="font-bold">{farm.name}</span>
                      </div>
                    )}

                    {/* Display products if farm doesn't match but products do */}
                    {productMatches.length > 0 && !farmMatches && (
                      <div>
                        <div
                          className="flex items-center cursor-pointer hover:bg-base-300 p-2 transition-colors duration-200"
                          onClick={() => handleFarmClick(farm.id)}
                        >
                          <img
                            src={farm.main_image}
                            alt={farm.name}
                            className="w-12 h-12 mr-2 rounded"
                          />
                          <span className="font-bold">{farm.name}</span>
                        </div>
                        <ul className="pl-4 flex flex-col">
                          {productMatches.map((product, productIndex) => (
                            <li
                              key={productIndex}
                              className="flex items-center"
                            >
                              <span className="ml-2">{product.name}</span>

                              {/* Ensure sizes are handled correctly */}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })
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
        <CiBellOn className="text-3xl" />
      </div>
    </div>
  );
};

export default Navbar;
