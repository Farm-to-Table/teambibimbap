import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  Circle,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import main_pin from "../../assets/main_pin.png";
import pin from "../../assets/pin_icon.png";
import farms from "../../assets/farmsData";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import schoolData, {
  getSelectedSchool,
  saveSelectedSchool,
} from "../../assets/schoolData";
import schoolMarker from "../../assets/schoolMarker.png";
import mock_map from "../../assets/mock_map.png";
import school_profile from "../../assets/school_profile.jpg";

const mainIcon = new L.Icon({
  iconUrl: main_pin,
  iconSize: [55, 55],
  iconAnchor: [22, 45],
  popupAnchor: [0, -45],
});

const schoolIcon = new L.Icon({
  iconUrl: schoolMarker,
  iconSize: [55, 55],
  iconAnchor: [22, 45],
  popupAnchor: [0, -45],
});

const locationIcon = new L.Icon({
  iconUrl: pin,
  iconSize: [35, 35],
  iconAnchor: [12, 25],
  popupAnchor: [0, -25],
});

const Map = () => {
  const [school, setSchool] = useState(null);
  const [selectedFarm, setSelectedFarm] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedSchool = getSelectedSchool();
    setSchool(savedSchool);
  }, []);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleMarkerClick = (farm) => {
    setSelectedFarm(farm);
  };

  const handleFarmClick = (farm) => {
    navigate(`/teambibimbap/farm/${farm.id}`);
  };

  const handleSchoolChange = (event) => {
    const selectedSchoolName = event.target.value;
    const selectedSchool = schoolData.find(
      (s) => s.name === selectedSchoolName
    );
    setSchool(selectedSchool);
    saveSelectedSchool(selectedSchool);
    setShowToast(true);
  };

  const resetLocation = () => {
    setSchool(null);
    saveSelectedSchool(null);
  };

  return (
    <>
      <div className="flex flex-col gap-1">
        <div className="flex flex-col justify-center items-center">
          <select
            className="select select-success focus-within:outline-none focus-within:ring-0 bg-main w-4/5 text-center font-creterount"
            onChange={handleSchoolChange}
            value={school ? school.name : ""}
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
        </div>
        {school ? (
          <>
            <MapContainer
              key={school.id}
              center={[
                parseFloat(school.locationX),
                parseFloat(school.locationY),
              ]}
              zoom={12}
              style={{ height: "350px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />

              <Marker
                position={[
                  parseFloat(school.locationX),
                  parseFloat(school.locationY),
                ]}
                icon={schoolIcon}
              >
                <Popup>{school.address}</Popup>
                <Tooltip permanent direction="left" offset={[0, 0]}>
                  {school.name}
                </Tooltip>
              </Marker>

              <Circle
                center={[
                  parseFloat(school.locationX),
                  parseFloat(school.locationY),
                ]}
                pathOptions={{
                  fillColor: "blue",
                  fillOpacity: 0.1,
                  color: "blue",
                }}
                radius={3000}
              />

              {farms.map((farm, index) => (
                <Marker
                  key={index}
                  position={farm.position}
                  icon={
                    selectedFarm && selectedFarm.name === farm.name
                      ? mainIcon
                      : locationIcon
                  }
                  eventHandlers={{
                    click: () => handleMarkerClick(farm),
                  }}
                >
                  <Popup>
                    <div onClick={() => handleFarmClick(farm)}>{farm.name}</div>
                  </Popup>
                  {(!selectedFarm || selectedFarm.name !== farm.name) && (
                    <Tooltip permanent direction="right" offset={[10, -15]}>
                      {farm.name}
                    </Tooltip>
                  )}
                </Marker>
              ))}
            </MapContainer>
          </>
        ) : (
          <div
            className="flex justify-center items-center"
            style={{ height: "350px" }}
          >
            <img
              src={mock_map}
              alt="Map placeholder"
              className="object-cover"
            />
          </div>
        )}
        {/* Display school info when selectedFarm is not present */}
        {school && !selectedFarm ? (
          <div className="flex flex-row items-center p-3">
            <img
              src={school_profile || logo}
              alt=""
              className="w-20 h-20 border-white border-3 rounded-full mr-3"
            />
            <div className="flex flex-col">
              <p className="mb-1 font-bold font-creterount">{school.name}</p>
              <p className="mb-1 text-sm font-creterount">{school.address}</p>
              <div className="flex items-center"></div>
            </div>
          </div>
        ) : selectedFarm ? ( // Show selected farm info
          <div
            className="flex flex-row items-center p-3"
            onClick={() => handleFarmClick(selectedFarm)}
          >
            <img
              src={selectedFarm.profile_image || logo}
              alt=""
              className="w-20 h-20 border-white border-3 rounded-full mr-3"
            />
            <div className="flex flex-col">
              <p className="mb-1 font-bold font-creterount">
                {selectedFarm.name}
              </p>
              <p className="mb-1 text-sm font-creterount">
                {selectedFarm.address}
              </p>
              <div className="flex items-center">
                <div className="rating flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div
                      key={star}
                      className={`mask mask-star-2 w-6 h-6 ${
                        star <= selectedFarm.score
                          ? "bg-orange-400"
                          : "bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
                <span className="ml-2">{selectedFarm.score} / 5</span>
              </div>
            </div>
          </div>
        ) : null}{" "}
        {/* Ensure a null return if neither school nor farm is selected */}
      </div>
      {showToast && (
        <div className="toast toast-top toast-center w-4/5">
          <div className="alert alert-success">
            <span className="text-white">
              {school ? `${school.name} selected successfully!` : ""}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Map;
