"use client";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <MapContainer
      center={[34.0522, -118.2437]} // Default to Los Angeles
      zoom={13}
      className="w-full h-screen"
      style={{ position: "absolute" }}
      zoomControl={true} // Show zoom buttons
    >
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[34.0522, -118.2437]} />
    </MapContainer>
  );
};

export default Map;
