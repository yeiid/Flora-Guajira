import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'



const Geo = ({ ubicacion, especie, municipio, ciudadano }) => {
  const [lat, lng] = Object.values(ubicacion)


  return (
    <MapContainer center={[lat, lng]} zoom={13} style={{ height: '400px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, lng]}>
        <Popup>
          <div>
            <h2>{especie}</h2>
            <p>
              Municipio: {municipio}
              <br />
              Ciudadano: {ciudadano}
            </p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Geo;
