import React, { useState, useEffect } from 'react';
import Header from '../../header/Header';
import './mapa.css';
import { MyIcon } from './MyIcon'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Mapa = () => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/datos.json");
        const jsonData = await response.json();
        setDatos(jsonData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);


  return (
    <>
      <Header />
      <MapContainer center={[11.0714111, -72.7505957]} zoom={15} style={{ height: '400px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {datos && datos.map(dato => (
          <Marker key={dato.id} position={[dato.latitude, dato.longitude]} icon={MyIcon}>
            <Popup>
              <div>
                <h2>{dato.especie}</h2>
                <p>
                  Municipio: {dato.municipio}
                  <br />
                  Ciudadano: {dato.ciudadano}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default Mapa;
