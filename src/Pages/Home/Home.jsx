import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import recommedation from "../../assets/recommendation.png";
import schoolData from "../../assets/schoolData";
import RecommandData from "../../assets/RecommandData";
import { PiCarrotBold } from "react-icons/pi";
import { LuGrape } from "react-icons/lu";
import { LuSalad } from "react-icons/lu";

const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showToast, setShowToast] = useState(false);

  const images = [
    { icon: <PiCarrotBold />, url: "/vege", type: "vege" },
    { icon: <LuSalad />, url: "/salad", type: "salad" },
    { icon: <LuGrape />, url: "/fruit", type: "fruit" },
  ];

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const resetLocation = () => {
    setSelectedLocation("");
  };

  return (
    <>
      <div className="flex flex-col gap-1">
        <div className="flex flex-col justify-center items-center">
          {selectedLocation ? (
            <h4
              onClick={resetLocation}
              className="cursor-pointer bg-main w-full p-4 font-creterount text-sm text-nowrap"
            >
              {`You are in `}
              <strong className="font-bold">{selectedLocation}</strong>,
              {` ${
                schoolData.find((data) => data.name === selectedLocation)
                  .address
              }`}
            </h4>
          ) : (
            <>
              <select
                className="select select-success focus-within:outline-none focus-within:ring-0 bg-main w-4/5 text-center font-creterount"
                onChange={handleLocationChange}
                value={selectedLocation}
              >
                <option disabled value="">
                  Pick your location
                </option>
                {schoolData.map((data, index) => (
                  <option key={index} value={data.name}>
                    {data.name}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
        <div className="items-center flex flex-row justify-center">
          <img src={logo} alt="" className="w-2/4" />
        </div>

        <div className="flex flex-row justify-center space-x-4 ">
          {images.map((image, index) => {
            // Define background colours based on image type
            let bgColor;
            if (image.type === "vege") {
              bgColor = "#f2873a"; // Orange background for vegetable icons
            } else if (image.type === "fruit") {
              bgColor = "#82306d"; // Purple background for fruit icons
            } else if (image.type === "salad") {
              bgColor = "#27a623"; // Green background for salad icons
            }

            return (
              <a
                href={image.url}
                key={index}
                className={`w-24 h-24 text-5xl mb-3 flex items-center justify-center object-cover rounded-full shadow-md shadow-black`}
                style={{ backgroundColor: bgColor, color: "#fff" }} // Background colour based on type and white icon
              >
                {image.icon}
              </a>
            );
          })}
        </div>

        <div>
          <div className="flex flex-row align-middle bg-base-200 p-3 items-center gap-3">
            <img
              src={recommedation}
              alt="test"
              className="w-10 h-10 object-cover rounded-full"
            />
            <h1 className="font-spicyrice">Today's Recommandation</h1>
          </div>
        </div>
        <div className="flex flex-row justify-center space-x-4 ">
          {RecommandData.map((product, index) => (
            <a
              href="#"
              key={index}
              className="bg-base-300 w-24 h-24 rounded-full flex items-center justify-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-full shadow-md shadow-black"
              />
            </a>
          ))}
        </div>
      </div>
      {showToast && (
        <div className="toast toast-top toast-center w-4/5">
          <div className="alert alert-success">
            <span className="text-white">
              {selectedLocation} selected successfully!
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
