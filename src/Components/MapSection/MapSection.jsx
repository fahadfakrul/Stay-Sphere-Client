import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
const MapSection = () => {
  return (
    <div className="container mx-auto ">
      <div className="space-y-2 mb-8">
        <h2 className="text-3xl font-bold">Find Us Here </h2>
      </div>
      <div>
        <MapContainer
          center={[23.811056, 90.407608]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[23.811056, 90.407608]}>
            <Popup>Stay Sphere</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapSection;
