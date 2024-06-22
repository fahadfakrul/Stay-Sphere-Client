import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./Map.css";
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import customPin from '../../assets/locationPin.png';


import iconShadow from 'leaflet/dist/images/marker-shadow.png';
const customIcon = L.icon({
  iconUrl:customPin,
  shadowUrl: iconShadow,
  iconSize: [38, 38], 
  iconAnchor: [19, 38], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -38] // point from which the popup should open relative to the iconAnchor
});
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
          <Marker position={[23.811056, 90.407608]} icon={customIcon}>
            <Popup>Stay Sphere</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapSection;
