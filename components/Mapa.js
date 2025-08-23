"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

// Corrección para iconos (Leaflet en Next.js a veces no los carga bien)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function Mapa() {
  useEffect(() => {
    if (document.getElementById("map")?._leaflet_id) return;

    const map = L.map("map", {
      center: [19.4326, -99.1332], 
      zoom: 5,
      zoomControl: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);


    const eventos = [
      {
        lat: 18.3675000,
        lng: -97.2986110,
        nombre: " Altepexi- Evento pasado",
        fecha: "2024-11-20",
        lugar: "Calle Insurgetes num.#273",
        imagen: "/img/altepexi.jpg",
      
      },
      {
        lat: 18.3783330,
        lng: -97.2594440,
        nombre: "Ajalpan - Evento pasado",
        fecha: "2024-10-15",
        lugar: "Teatro Municipal",
        imagen: "/img/ajalpan.jpg",
      },
      {
        lat:18.3347220, 
        lng: -97.2450000,
        nombre: "San Sebastian Zinacatepec - Evento pasado",
        fecha: "2024-09-10",
        lugar: "Palacio Municipal",
        imagen: "/img/sanse.jpg",
      },
       {
        lat: 18.4280071,
        lng: -97.4059628,
        nombre: "Coapan,Tehuacan - Evento pasado",
        fecha: "2024-09-10",
        lugar: "Parque principal",
        imagen: "/img/coapan.jpg",
       
      },
       {
        lat: 17.2694440, 
        lng: -97.6791670,
        nombre: "Tlaxiaco - Evento pasado",
        fecha: "2024-09-10",
        lugar: "Teatro Municipal",
        imagen: "/img/tlaxiaco.jpg",
       
      },
           {
        lat: 19.3167101, 
        lng: -98.2386138,
        nombre: "Tlaxcala - Evento pasado",
        fecha: "2024-10-15",
        lugar: "Calle 16 de septiembre S/N",
        imagen: "/img/tlaxcala.jpg",
      },
           {
        lat: 18.2914539, 
        lng: -97.2882216,
        nombre: "San José Miahuatlán - Evento pasado",
        fecha: "2024-10-15",
        lugar: "Teatro Manzanos",
        imagen: "/img/miahuatlan.jpg",
      },
           {
        lat: 18.3261009,
        lng: -97.3475652,
        nombre: "San Gabriel Chilac - Evento pasado",
        fecha: "2024-10-15",
        lugar: "Palacio Municipal",
      },
           {
        lat: 19.0437196,
        lng: -98.1981486,
        nombre: "Ciudad de Puebla - Evento pasado",
        fecha: "2024-10-15",
        lugar: "Teatro Diana",

      },
      {
  lat: 18.2895000,
  lng: -97.1433000,
  nombre: "Calipan - Evento pasado",
  fecha: "2025-07-25",
  lugar: "Calipan, Puebla"
},
{
  lat: 18.4650000,
  lng: -97.3920000,
  nombre: "Explanada Municipal de Tehuacán - Evento pasado",
  fecha: "2025-03-23",
  lugar: "Explanada Municipal, Tehuacán, Puebla"
},
{
  lat: 18.4656000,
  lng: -97.3912000,
  nombre: "Patio de las Columnas Tehuacán - Evento pasado",
  fecha: "2025-03-02",
  lugar: "Patio de las Columnas, Tehuacán, Puebla"
},
{
  lat: 18.4648000,
  lng: -97.3887000,
  nombre: "Salón Quinta San Román Tehuacán - Evento pasado",
  fecha: "2025-02-28",
  lugar: "Salón Quinta San Román, Tehuacán, Puebla"
},
{
  lat: 18.3134000,
  lng: -97.3336000,
  nombre: "Chilac - Evento pasado",
  fecha: "2025-03-01",
  lugar: "San Gabriel Chilac, Puebla"
},
{
  lat: 18.4645000,
  lng: -97.3928000,
  nombre: "Salón La Troje Tehuacán - Evento pasado",
  fecha: "2025-01-25",
  lugar: "Salón La Troje, Tehuacán, Puebla"
},
{
  lat: 18.4645000,
  lng: -97.3928000,
  nombre: "Salón La Troje Tehuacán - Evento pasado",
  fecha: "2024-12-25",
  lugar: "Salón La Troje, Tehuacán, Puebla"
},
{
  lat: 18.4642000,
  lng: -97.3915000,
  nombre: "Salón Jarros Tehuacán - Evento pasado",
  fecha: "2024-12-21",
  lugar: "Salón Jarros, Tehuacán, Puebla"
},
{
  lat: 18.3058000,
  lng: -97.0797000,
  nombre: "Altepexi - Evento pasado",
  fecha: "2024-12-15",
  lugar: "Altepexi, Puebla"
},
{
  lat: 17.2666000,
  lng: -97.6790000,
  nombre: "Tlaxiaco Oaxaca - Evento pasado",
  fecha: "2024-11-30",
  lugar: "Tlaxiaco, Oaxaca"
},
{
  lat: 17.2666000,
  lng: -97.6790000,
  nombre: "Tlaxiaco Oaxaca - Evento pasado",
  fecha: "2024-11-23",
  lugar: "Tlaxiaco, Oaxaca"
},
{
  lat: 17.2666000,
  lng: -97.6790000,
  nombre: "Tlaxiaco Oaxaca - Evento pasado",
  fecha: "2024-11-16",
  lugar: "Tlaxiaco, Oaxaca"
},
{
  lat: 18.4649000,
  lng: -97.3931000,
  nombre: "Salón Villa del Carmen Tehuacán - Evento pasado",
  fecha: "2024-10-26",
  lugar: "Salón Villa del Carmen, Tehuacán, Puebla"
},
{
  lat: 18.4661000,
  lng: -97.3885000,
  nombre: "17 Sur y 5 Oriente La Purísima Tehuacán - Evento pasado",
  fecha: "2024-10-05",
  lugar: "Colonia La Purísima, Tehuacán, Puebla"
},
{
  lat: 18.2389000,
  lng: -97.1517000,
  nombre: "Explanada Municipal de Coxcatlán - Evento pasado",
  fecha: "2024-09-15",
  lugar: "Explanada Municipal, Coxcatlán, Puebla"
},
{
  lat: 18.2653000,
  lng: -97.0992000,
  nombre: "San Esteban Necoxcalco - Evento pasado",
  fecha: "2024-08-24",
  lugar: "San Esteban Necoxcalco, Puebla"
},
{
  lat: 18.4657000,
  lng: -97.3910000,
  nombre: "Salón La Hacienda Tehuacán - Evento pasado",
  fecha: "2024-08-10",
  lugar: "Salón La Hacienda, Tehuacán, Puebla"
},
{
  lat: 18.4652000,
  lng: -97.3906000,
  nombre: "Salón Los Arcos Tehuacán - Evento pasado",
  fecha: "2024-07-13",
  lugar: "Salón Los Arcos, Tehuacán, Puebla"
},
{
  lat: 18.4645000,
  lng: -97.3928000,
  nombre: "Salón La Troje Tehuacán - Evento pasado",
  fecha: "2024-06-15",
  lugar: "Salón La Troje, Tehuacán, Puebla"
},
{
  lat: 18.4649000,
  lng: -97.3897000,
  nombre: "Salón Jardines del Caribe Tehuacán - Evento pasado",
  fecha: "2024-05-14",
  lugar: "Salón Jardines del Caribe, Tehuacán, Puebla"
},
{
  lat: 18.5056000,
  lng: -97.2106000,
  nombre: "San Cristóbal Tepeteopan - Evento pasado",
  fecha: "2024-05-04",
  lugar: "San Cristóbal Tepeteopan, Puebla"
},
{
  lat: 18.4643000,
  lng: -97.3890000,
  nombre: "18 de Marzo Av. Lic. Benito Juárez Santa Cecilia Tehuacán - Evento pasado",
  fecha: "2024-03-02",
  lugar: "Colonia Santa Cecilia, Tehuacán, Puebla"
},
{
  lat: 18.3108000,
  lng: -97.1530000,
  nombre: "Zinacatepec - Evento pasado",
  fecha: "2024-01-13",
  lugar: "San Sebastián Zinacatepec, Puebla"
},
{
  lat: 18.3058000,
  lng: -97.0797000,
  nombre: "Altepexi - Evento pasado",
  fecha: "2024-01-06",
  lugar: "Altepexi, Puebla"
},
{
  lat: 18.4660000,
  lng: -97.3913000,
  nombre: "Villa Iluminada El Calvario Tehuacán - Evento pasado",
  fecha: "2024-01-07",
  lugar: "El Calvario, Tehuacán, Puebla"
},
{
  lat: 17.0244000,
  lng: -96.5876000,
  nombre: "Teotitlán del Valle Oaxaca - Evento pasado",
  fecha: "2023-12-26",
  lugar: "Teotitlán del Valle, Oaxaca"
},
{
  lat: 18.4651000,
  lng: -97.3935000,
  nombre: "Salón Montaña Tehuacán - Evento pasado",
  fecha: "2023-12-16",
  lugar: "Salón Montaña, Tehuacán, Puebla"
},
{
  lat: 19.0413000,
  lng: -98.2062000,
  nombre: "Premios Telebyn 'Televisa' Puebla - Evento pasado",
  fecha: "2023-03-01",
  lugar: "Televisa Puebla, Puebla"
}


    ];

    const hoy = new Date();

    eventos.forEach(({ lat, lng, nombre, fecha, lugar, imagen, video }) => {
      const fechaEvento = new Date(fecha);

      if (fechaEvento < hoy) {
        let contenidoPopup = `
          <div style="max-width: 250px;">
            <b>${nombre}</b><br/>
            Lugar: ${lugar}<br/>
            Fecha: ${fechaEvento.toLocaleDateString()}<br/>
        `;

        if (imagen) {
          contenidoPopup += `<img src="${imagen}" alt="${nombre}" style="width: 100%; margin-top: 5px; border-radius: 5px;" />`;
        }

        if (video) {
          contenidoPopup += `
            <video controls style="width: 100%; margin-top: 5px; border-radius: 5px;">
              <source src="${video}" type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          `;
        }

        contenidoPopup += `</div>`;

        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(contenidoPopup);
      }
    });
  }, []);

  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-xl shadow-lg overflow-hidden">
      <div id="map" className="w-full h-full"></div>
    </div>
  );
  
}
