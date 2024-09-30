import React from "react";
import { useParams } from "react-router-dom";
import farms from "../../assets/farmsData";

const FarmDetailPage = () => {
  const { id } = useParams(); // Get the farm ID from the URL
  const farm = farms.find((farm) => farm.id === Number(id)); // Find the farm by ID
  if (!farm) {
    return <p>Farm not found!</p>; // Handle case where farm is not found
  }

  return (
    <>
      <div className="h-screen pb-8 overflow-auto">
        <div
          className="hero min-h-[200px]"
          style={{ backgroundImage: `url(${farm.main_image})` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Welcome to {farm.name}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row p-3 relative">
          <img
            src={farm.profile_image}
            alt="farm-"
            className="w-20 h-20 border-white border-3 rounded-full relative -mt-10"
          />
          <div className="ml-3 flex flex-col gap-3">
            <p className="mb-5 font-bold">{farm.name}</p>
          </div>
        </div>
        <div>
          <p className="p-5 font-italic">{farm.introduction}</p>
        </div>
        <div className="mx-2 border-2 p-4 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">Products</h1>
          {farm.products.map((prod, index) => (
            <div
              className="flex flex-col md:flex-row items-center border-b-2 mb-4 pb-4"
              key={index}
            >
              <div className="md:w-1/2 w-full flex justify-center md:justify-end mt-4 md:mt-0">
                <img
                  src={prod.product_image1 || prod.product_image2}
                  alt={prod.product}
                  className="w-48 h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2 w-full flex flex-col space-y-2">
                <h2 className="text-xl font-semibold">{prod.product}</h2>
                <div className="text-sm font-medium text-gray-500">
                  Varieties:
                </div>
                <ul className="list-disc list-inside text-gray-600">
                  {Object.keys(prod.varieties).map((variety, vIndex) => (
                    <li key={vIndex}>
                      <span className="font-semibold">{variety}:</span>{" "}
                      {prod.varieties[variety]}
                    </li>
                  ))}
                </ul>
                <div className="text-gray-700">
                  <span className="font-semibold">Size:</span> {prod.size}
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">Weight:</span>{" "}
                  {prod.weight.join(", ")}
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">Quality:</span> {prod.quality}
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">Contact:</span> {prod.contact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FarmDetailPage;
