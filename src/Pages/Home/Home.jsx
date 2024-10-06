import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import recommedation from "../../assets/recommendation.png";
import schoolData, {
  getSelectedSchool,
  saveSelectedSchool,
} from "../../assets/schoolData";
import RecommandData from "../../assets/RecommandData";
import { PiCarrotBold } from "react-icons/pi";
import { LuGrape } from "react-icons/lu";
import { LuSalad } from "react-icons/lu";
import { Link } from "react-router-dom";

const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [products, setProducts] = useState(
    RecommandData.map((product) => ({
      ...product,
      selectedWeight: Object.keys(product.price)[0], // 기본 무게 설정
    }))
  );

  const images = [
    { icon: <PiCarrotBold />, url: "/teambibimbap/vege", type: "vege" },
    { icon: <LuSalad />, url: "/teambibimbap/salad", type: "salad" },
    { icon: <LuGrape />, url: "/teambibimbap/fruit", type: "fruit" },
  ];

  useEffect(() => {
    const savedSchool = getSelectedSchool();
    if (savedSchool) {
      setSelectedLocation(savedSchool.name);
    }
  }, []);

  const handleLocationChange = (event) => {
    const selectedSchoolName = event.target.value;
    setSelectedLocation(selectedSchoolName);
    setShowToast(true);

    const selectedSchool = schoolData.find(
      (data) => data.name === selectedSchoolName
    );
    if (selectedSchool) {
      saveSelectedSchool(selectedSchool);
    }
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
    saveSelectedSchool(null);
  };

  const handleWeightChange = (index, event) => {
    const newWeight = event.target.value;
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts[index].selectedWeight = newWeight;
      return updatedProducts;
    });
  };

  return (
    <>
      <div className="flex flex-col gap-1">
        <div className="flex flex-col justify-center items-center">
          {selectedLocation ? (
            <h4
              onClick={resetLocation}
              className="cursor-pointer bg-main w-full p-4 font-creterount text-sm text-nowrap text-center"
            >
              Location:{" "}
              <strong className="font-bold ">{selectedLocation}</strong>
            </h4>
          ) : (
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
          )}
        </div>
        <div className="items-center flex flex-row justify-center">
          <img src={logo} alt="" className="w-2/4" />
        </div>

        <div className="flex flex-row justify-center space-x-4 ">
          {images.map((image, index) => {
            let bgColor;
            if (image.type === "vege") {
              bgColor = "#f2873a";
            } else if (image.type === "fruit") {
              bgColor = "#82306d";
            } else if (image.type === "salad") {
              bgColor = "#27a623";
            }

            return (
              <Link
                to={image.url}
                key={index}
                className="w-24 h-24 text-5xl mb-3 flex items-center justify-center object-cover rounded-full "
                style={{ backgroundColor: bgColor, color: "#fff" }}
              >
                {image.icon}
              </Link>
            );
          })}
        </div>

        <div>
          <div className="flex flex-row w-full  bg-base-200 p-3 items-center justify-center gap-3">
            <img
              src={recommedation}
              alt="test"
              className="w-10 h-10 object-cover rounded-full"
            />
            <h1 className="font-spicyrice text-en">Today's Recommendation</h1>
          </div>
        </div>

        <div className="flex flex-row justify-center space-x-4 ">
          {products.map((product, index) => (
            <div key={index}>
              <Link
                to={`/teambibimbap/product/${product.farm}/${product.name}`}
                className="block" // 이미지 주위를 클릭 가능하도록 전체를 block으로 감쌈
              >
                <div className="bg-base-300 w-24 h-24 rounded-full flex items-center justify-center">
                  <img
                    src={product.image1}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-full "
                  />
                </div>
              </Link>
              <div className="rating flex items-center flex-row justify-center">
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

              <h1 className="text-center font-creterount">{product.name}</h1>

              <div className="flex items-center">
                <select
                  value={
                    product.selectedWeight || Object.keys(product.price)[0]
                  } // 기본값으로 첫 번째 무게 선택
                  onChange={(e) => handleWeightChange(index, e)}
                  className="font-creterount select mb-2 w-24 border-none outline-none text-sm p-1 focus:ring-0 focus:outline-none"
                  style={{
                    boxShadow: "none",
                    border: "none",
                    outline: "none",
                  }}
                >
                  {Object.keys(product.price).map((weight) => (
                    <option
                      key={weight}
                      value={weight}
                      className="border-none outline-none"
                      style={{ border: "none", outline: "none" }}
                    >
                      {weight}
                    </option>
                  ))}
                </select>
              </div>

              {/* 무게에 따른 가격 표시 */}
              <p className="text-center font-creterount">
                Price:{" "}
                <strong>
                  {
                    product.price[
                      product.selectedWeight || Object.keys(product.price)[0]
                    ]
                  }{" "}
                  $
                </strong>
              </p>
            </div>
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
