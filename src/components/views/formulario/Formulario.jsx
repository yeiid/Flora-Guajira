import React, { useState } from 'react';
import Geo from '../mapa/Geo';
import './formulario.css'
import 'leaflet/dist/leaflet.css';

const Formulario = () => {
  const [location, setLocation] = useState(null);
  const [especie, setEspecie] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [ciudadano, setCiudadano] = useState('');

  const obtenerUbicacion = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      alert('Tu navegador no soporta geolocalización');
    }
  };

  const enviarFormulario = async () => {
    if (location && especie && municipio && ciudadano) {
      const data = {
        latitud: location.lat,
        longitud: location.lng,
        especie,
        municipio,
        ciudadano,
      };
      console.log(data)

      try {
        alert('Formulario enviado');
        window.location.reload(); // recarga la página después de enviar el formulario
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
        alert('Error al enviar el formulario');
      }
    } else {
      alert('Por favor completa todos los campos');
    }
  };

  return (
    <div className="form-container">
      <h1>Formulario</h1>
      <button className="button-form secondary-button" onClick={obtenerUbicacion}>
        ¿Dónde estoy?
      </button>
      {location && (
        <div>
          <p>LATITUDE: {location.lat}</p>
          <p>LONGITUDE: {location.lng}</p>
        </div>
      )}
      <div className="form">
        <label className="label">Especie</label>
        <input className="input" type="text" value={especie} onChange={(event) => setEspecie(event.target.value)} />
        <label className="label">Municipio</label>
        <select className="input" value={municipio} onChange={(event) => setMunicipio(event.target.value)}>
          <option value="">Seleccione</option>
          <option value="Barrancas">Barrancas</option>
          <option value="barrancas">Hatonuevo</option>
        </select>
        <label className="label">Ciudadano</label>
        <input className="input" type="text" value={ciudadano} onChange={(event) => setCiudadano(event.target.value)} />
        <button className="primary-button" onClick={enviarFormulario}>
          Enviar
        </button>
        {location && <Geo ubicacion={location} especie={especie} municipio={municipio} ciudadano={ciudadano} />}
      </div>
    </div>
  );
};

export default Formulario;
