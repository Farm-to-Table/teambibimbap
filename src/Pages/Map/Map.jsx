import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import main_pin from "../../assets/main_pin.png";
import pin from "../../assets/pin_icon.png";
import farms from "../../assets/farmsData"; // Adjust the import path as necessary
import logo from "../../assets/logo.png"; // Ensure you have the logo imported
import { useNavigate } from "react-router-dom"; // Import useNavigate
import schoolData from "../../assets/schoolData";
// Custom icon for the main location
const mainIcon = new L.Icon({
  iconUrl: main_pin,
  iconSize: [55, 55],
  iconAnchor: [22, 45],
  popupAnchor: [0, -45],
});

// Custom icon for other locations
const locationIcon = new L.Icon({
  iconUrl: pin,
  iconSize: [35, 35],
  iconAnchor: [12, 25],
  popupAnchor: [0, -25],
});

const Map = () => {
  const center = [-43.6, 172.5]; // Approximate coordinates for Lincoln, New Zealand
  const zoom = 12;

  // State to track the currently selected farm
  const [selectedFarm, setSelectedFarm] = useState(schoolData[0]); // Default to the first farm
  const navigate = useNavigate(); // Initialize navigate

  const handleMarkerClick = (farm) => {
    setSelectedFarm(farm); // Update the selected farm
  };

  const handleFarmClick = (farm) => {
    navigate(`/farm?name=${encodeURIComponent(farm.name)}`); // Navigate to the farm detail page
  };

  return (
    <>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {farms.map((farm, index) => (
          <Marker
            key={index}
            position={farm.position}
            icon={selectedFarm.name === farm.name ? mainIcon : locationIcon}
            eventHandlers={{
              click: () => handleMarkerClick(farm), // Handle marker click
            }}
          >
            <Popup>
              <div onClick={() => handleFarmClick(farm)}>{farm.name}</div>
            </Popup>
            {/* Only show Tooltip if farm is not selected */}
            {!selectedFarm || selectedFarm.name !== farm.name ? (
              <Tooltip permanent direction="right" offset={[10, -15]}>
                {farm.name}
              </Tooltip>
            ) : null}
          </Marker>
        ))}
      </MapContainer>

      {/* Display Farmer Information for the selected farm */}
      <div
        className="flex flex-row items-center p-3"
        onClick={() => handleFarmClick(selectedFarm)}
      >
        <img
          src={selectedFarm.profile || logo} // Use the logo or a placeholder if not defined
          alt=""
          className="w-20 h-20 border-white border-3 rounded-full mr-3" // Added margin right for spacing
        />
        <div className="flex flex-col">
          <p className="mb-1 font-bold font-creterount">
            {selectedFarm.farmer}
          </p>
          <div className="flex items-center">
            <div className="rating flex">
              {/* Loop through 5 stars and fill based on selectedFarm.score */}
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  className={`mask mask-star-2 w-6 h-6 ${
                    star <= selectedFarm.score ? "bg-orange-400" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
            <span className="ml-2">{selectedFarm.score} / 5</span>{" "}
            {/* Display score next to stars */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
