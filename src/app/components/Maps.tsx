"use client";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <MapContainer
      className="w-full h-screen"
      style={{ position: "absolute" }}
      zoomControl={true as boolean} // Show zoom buttons
      zoom={13} // Set default zoom level
      center={[34.0522, -118.2437] as [number, number]} // Explicitly type center
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[34.0522, -118.2437]} />
    </MapContainer>
  );
};

export default Map;
