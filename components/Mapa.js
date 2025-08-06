"use client";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 22.1565, // Centro aproximado de México
  lng: -100.9855,
};

const lugares = [
  { lat: 19.4326, lng: -99.1332, nombre: "CDMX - Evento Empresarial" },
  { lat: 20.6597, lng: -103.3496, nombre: "Guadalajara - Boda" },
  { lat: 25.6866, lng: -100.3161, nombre: "Monterrey - Feria Regional" },
  { lat: 21.8853, lng: -102.2916, nombre: "Aguascalientes - Festival" },
  { lat: 19.0414, lng: -98.2063, nombre: "Puebla - Evento Privado" },
];

const Mapa = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "API_KEY", 
  });

  if (!isLoaded) return <div className="text-center py-8 text-white">Cargando mapa...</div>;

  return (
    <section className="py-12 bg-black text-white text-center">
      <h2 className="text-4xl md:text-5xl font-bebas mb-6 leading-tight text-white drop-shadow-[1px_1px_2px_#fff]">Lugares Donde Hemos Tocando</h2>
      <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={6}
          options={{ disableDefaultUI: true }}
        >
          {lugares.map((lugar, index) => (
            <Marker
              key={index}
              position={{ lat: lugar.lat, lng: lugar.lng }}
              title={lugar.nombre}
            />
          ))}
        </GoogleMap>
      </div>
    </section>
  );
};

export default Mapa;
