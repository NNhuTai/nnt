import React from "react";
import { MapContainer, TileLayer, Marker, useMap, Popup, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../App.css";

// Setting the icon image for map markers
function GetIcon(iconSize1) {
  return L.icon({
    iconUrl: require("../assets/Icons/pizza_icon.png"),
    iconSize: iconSize1,
  });
}

export default function PizzaMap() {

  return (
    <>
      <p className="map-header"> Văn Phòng và xưởng sản xuất</p>
      <div className="map-container">
        <div className="map-list-box">
          <div className="wide-map">
            <MapContainer
              className="leaflet-container"
              center={[10.869644, 106.783446]}
              zoom={15}
              scrollWheelZoom={true}
              zoomControl={false}
            >
              <ZoomControl position="bottomleft"/>
              {/* <LocationMarker></LocationMarker> */}
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
            </MapContainer>
          </div>
        </div>
        </div>
    </>
  );
}
